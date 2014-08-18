---
title: Sticky Menu UX Pattern
published: true
---

> Your site must be snappy to surf to delight your visitors

This article gives a brief overview of the sticky menu navigation UX pattern that is implemented on this site and the rational behind it's usage.

## The Importance of Navigation

Navigation is typically the **backbone of the usability** of a site, and so naturally it's efficiency of use is of paramount importance. 

Given that a typical website has a window of opportunity of [less than 10 seconds](http://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/) in which to grab the attention of your visitor, any usability roadblocks will send your visitors bouncing off to competing websites. 

Your site must be snappy to surf to make your visitors delighted.

## The UX Pattern

In response to the need for accessibility of navigation, a design pattern emerged where the menu is made to "stick" to the top of the page even when scrolling, so it is always accessible. [Smashing Magazine's](http://www.smashingmagazine.com/) Hyrum Denney [conducted an experiment](http://www.smashingmagazine.com/2012/09/11/sticky-menus-are-quicker-to-navigate/) to discover whether this technique improves navigation speed and it discovered that it does. Positively. **By 22%**. Here's an example of a sticky menu taken from [www.makebetterapps.com](http://www.makebetterapps.com/):

<img src="/images/design/sticky-menu-still.gif" data-gif-src="/images/design/sticky-menu.gif" />

## Limitations

Of course one drawback of the sticky menu approach is it's **intrusiveness**. Something that the user might expect to disappear lingers on the page. Navigation is typically designed to be bold so the user notices it. Having something eye grabbing distracts from your other valuable content.

## The solution

As you will have noticed by now, when you scroll down on this page two things happen:

- The navigation bar sticks to the top of the page 
- It's height is shrunk slightly

I decided to adopt the Sticky Menu paradigm because of the **sheer efficiency gains** that my visitors would enjoy. To **de-emphasize** it after scrolling I slightly reduce it's vertical height. The result is a more efficient navigation experience. 

The shrinking action is also animated smoothly using CSS3. This is a touch that will go towards delighting the user with very little processing overhead.

*[UX]: User Experience
