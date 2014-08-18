---
title: Sticky Menu UX Pattern
published: true
---

This article gives a brief overview of the sticky menu navigation UX pattern that is implemented on this site and the rational behind it's usage.

## The Importance of Navigation

Most designers will agree that navigation ranks very highly as one the most critical  aspects of website design, yet it consistently poses a challenge on new design projects. Efficiency of use is a major contributing factor to visitor satisfaction and accessibility plays a huge role in this.

## The UX Pattern

In response to the need for accessibility of navigation, a design pattern emerged where the menu is made to "stick" to the top of the page even when scrolling, so it is always accessible. [Smashing Magazine's](http://www.smashingmagazine.com/) Hyrum Denney [conducted an experiment](http://www.smashingmagazine.com/2012/09/11/sticky-menus-are-quicker-to-navigate/) to discover whether this technique improves navigation speed and it discovered that it does. Positively. **By 22%**. Heres an example of a sticky menu taken from [www.makebetterapps.com/](http://www.makebetterapps.com/):

<img src="/images/design/sticky-menu-still.gif" data-gif-src="/images/design/sticky-menu.gif" />

## Limitations

Of course one drawback of the sticky menu approach is it's intrusiveness. Something that the user might expect to disappear lingers on the page. Navigation is typically designed to be bold so the user notices it. Having something eye grabbing constantly on the page can be a little disruptive.

## The solution

As you will have noticed by now, when you scroll down on this page two things happen:

- The navigation bar sticks to the top of the page 
- It's height is shrunk slightly

I decided to adopt the Sticky Menu paradigm because of the sheer efficiency gains that my visitors would enjoy. To combat it's distractiveness, I shrink it slightly so it is less distracting. The result is a more efficient navigation experience. 

The shrinking action is also animated smoothly using CSS3. This is a touch that will go towards delighting the user with very little processing overhead.

*[UX]: User Experience
