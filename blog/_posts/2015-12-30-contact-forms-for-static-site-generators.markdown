---
category: development
title: Contact Forms for Static Site Generators like Jekyll
redirect_from:
 - /development/2015/contact-forms-for-static-site-generators/
---

**Static site generators like Jekyll** are great. They're fast, simple to use, and you can even get hosting that is updated directly from your Git repository using Github pages like I do. 

However, for anybody who has ever used them before, there is one obvious, and rather inherently unavoidable downside: lack of server side support, which means **no contact forms**. That's where [Formspree](http://formspree.io/) comes in.

To use **Formspree**, all you have to do is drop in your contact form HTML, set Formspree as the form action, and you're ready to start receiving emails.

Ok so it's not *quite* that simple, but nearly:

## The Form HTML

Drop the below HTML snippet into your page to create the contact form. Remember to **replace "your@email.com" in the action with your own email address**.

<script src="https://gist.github.com/maxmumford/e5ddceba65f8f967ac54.js"></script>

## Email Verification

Test the form once it is on your site. Formspree will send you an activation email with a link you must visit before you can start using the form.

## Profit

You can now start receiving emails! The email itself is automatically serialized and formatted by Formspree, and will look something like this:

![Formspree email example](/images/development/formspree.png)

## Advanced Features

Formspree does provide some advanced functionality, such as anti spam measures, carbon copy sending, and thank you page specification. Email address hiding, unlimited submissions* and submission archives. [See their website](http://formspree.io/) for more information.

*NB: Free accounts are limited to 1,000 emails a month.
