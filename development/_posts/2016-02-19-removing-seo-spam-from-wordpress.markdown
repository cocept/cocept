---
title:  Removing SEO Spam from Wordpress Blog Posts
---

## Some Background

I was commissioned to repair, update and secure a Wordpress website that was may years out of date and had been hacked to pieces. 

A quick check using [Sucuri Site Check](https://sitecheck.sucuri.net/) revealed that the vast majority of posts had had SEO spam injected into their contents in the database. That's about 200 posts. 

Never one to waste time doing things manually when a script can do it 10 times faster, I set about making a tool to automatically remove all of this spam for me. That tool is [open source](https://github.com/maxmumford/wordpress-seo-spam-remover) and licensed under the [MIT license](https://raw.githubusercontent.com/maxmumford/wordpress-seo-spam-remover/master/LICENSE) for anybody to use.

## Who's it for?

If you scan your site using [Sucuri Site Check](https://sitecheck.sucuri.net/) and it reveals an infection with the definition "MW:SPAM:SEO?s", this tool is for you. 

Check the source code of your blog posts and you'll see something like this:

<script src="https://gist.github.com/maxmumford/4b66256d9a7f2c62bdd3.js"></script>

## Usage

 - git clone yourself a copy of the repository, which you'll find here:  [https://github.com/maxmumford/wordpress-seo-spam-remover](https://github.com/maxmumford/wordpress-seo-spam-remover)
 - Follow the setup instructions and install the python mysql connector and meld
 - Run the script with the bash command below:
 
<script src="https://gist.github.com/maxmumford/13a9b1a2dacce398a5f1.js"></script>

## What will happen?

When you run the script it'll do the following:

 - connect to your wordpress mysql database
 - finds all posts containing the string "\_all\_wplink\_"
 - uses a simple regex to identify and remove the spam from the post contents
 - present you with a diff of all the changes it will make to the database
 - asks you to confirm you are happy with the diff
 - if you select yes it will update your database accordingly
 - if you select no, no changes to your database will be made

Enjoy!
