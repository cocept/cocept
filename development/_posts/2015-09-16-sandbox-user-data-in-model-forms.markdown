---
title:  Sandboxing User Data in Model Forms
---

## Introduction

A lot of online applications nowadays are built using Multi Tenant Data Architecture, meaning the data for multiple clients is stored in the same database. This can obviously cause some data security concerns because the developers have to ensure that their client's data is sandboxed and not accessible by other clients.

While some frameworks let you handle this issue in a graceful and DRY way with a high level security layer, Django does not. It is in fact quite difficult to implement an application wide, high level solution for this particular problem.

While a DRY, high level and clean solution is not, as far as I know, available with Django, this post will show you how to at least sandbox the data available from within Django's Model Forms.

## Scenario

Consider the following models:

<script src="https://gist.github.com/maxmumford/ab82f2e560563369e8c9.js"></script>

<script src="https://gist.github.com/maxmumford/e4a8f1a7e67a9c9dc7b1.js"></script>

We want to use Django's Model Forms to allow the user to create a Tenancy with a link to a Building that they own. By default, if we create a ModelForm for the Tenancy object, Django will load all Buildings in the database as options within the form. We want to limit the options to only Buildings whose owner field is the logged in User. 

To sandbox the user's data like this in a DRY and simple way, we can subclass Django's ModelForm class and modify the __init__ event to, at runtime, do the following:

* Look at each field of the form
* If a field is a reference field (i.e. a ForeignKey field)
* Find the model that it points to
* If that model has a field called "owner", change the queryset to only show records where owner is the logged in user

In our example it will look something like this:

* Our form model (Tenancy) has 1 field called building, of type ForeignKey
* That field's model is the model Building
* The model Building has a field called owner
* So we change the building field's queryset to only show Buildings where owner is the logged in user

In code, it looks like this:

<script src="https://gist.github.com/maxmumford/69e54b7e36da78a34293.js"></script>

And your ModelForm will look something like this (notice the inheritence):

<script src="https://gist.github.com/maxmumford/223e92090018a3d566b1.js"></script>

## Careful...

There are a few caveats to using this method:

* It will of course only work for Model Forms
* The "owner" field must be called "owner" by convention. Call it something else and it won't work
* It's not super clear what is actually happening, and changing behaviour at runtime can lead to confusing and enigmatic problems for people not familiar with this code
* Your developers still have to be aware of the need to sandbox data in all other areas of the app

## Conclusion

I consider this snippet a useful time saver that should probably only be used on small projects. It saves a lot of repitition of code but unfortunately isn't a silver bullet for the problem of data sandboxing; for that, we are at the mercy of the Django developers. You can't have it all, right?!
