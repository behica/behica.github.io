---
layout: post
title: Bloc Jams
description: Bloc Jams is a web based music player written in AngularJS.
image: "/img/bj-ng/BJng-homepage.PNG"
---

## Summary

The origin of Bloc Jams was to build a digital music player (ex. Spotify, Google Music) as a method to learning frontend web development.

You can see it in action here --> [BlocJams](https://milodi.herokuapp.com/)*

## About

In its original form, Bloc Jams was laid out with HTML, styled and made responsive with CSS, and implemented with JavaScript and jQuery. In its next form, Bloc Jams was re-factored to utilize AngularJS to create a seamless, single-page-application experience for the user.

## Learning by Doing

Bloc Jams is the very first application you're tasked to build as an apprentice at [Bloc](https://bloc.io). Bloc wastes no time getting you into the thick of development. Upon your completion of introductory material on HTML, CSS, Git, and JavaScript, you're thrown into a series of checkpoints, following a tutorial method, to mark your learning. Along the way, checkpoints contain assignment materials where you, the learner, get to flex your newfound coding skills and apply them using what you've seen in the checkpoint alongside unguided self-discovery sessions (go off and Google some stuff, grasshopper!).

Through this series of checkpoints and assignments, you get to watch your application grow before your eyes. While you're learning about basic structure and styles, you're laying the foundation for a modern application utilizing responsiveness in HTML5 and CSS3. Suddenly, applying a package of fonts, colors and subtle images, your structure is complete, and you've got a web application landing page on your hands.

## Responsive Design

Early in the process, you also learn about web page handling on multiple devices. We have all been there. You're on a site that looks great on your desktop. You're on the move now, but you have your handy smartphone with you. You pull up that same site that looked so great -- so easy to read and flowed so well -- only to have it fall on its face in your smaller screen. With today's resolutions, that doesn't just mean you need to scroll back and forth to see pages flowing off to the side.

Modern device resolutions can now dwarf what many of us still have on our desktops or laptops. Less than 5% of people are using screens with resolutions higher than 1920x1080 according to w3counter.com. On the flip side, almost 30% of users were on a screen with a resolution of 640x360. So that site you just designed on your pixel perfect studio monitor now takes an enormous amount of effort to navigate. In comes responsive design.

{:.half-size}
![]({{ site.baseurl }}/img/bj-ng/BJng-narrow.png)


Through the usage of a responsive grid, separate elements collapse seamlessly into a single column when the appropriate parameters are activated. In this case, when our user's screen is between 640px and 1024px, the grid will be one column.

## DOM Scripting & jQuery

The essence of a music player is playing music. For this, we need to add a few elements to our site. First, a collection view to view the albums we have access to.

![]({{ site.baseurl}}/img/bj-ng/BJng-collections.png)

If you only had one or two albums to display here, and the site was something you only made for yourself and no one else, you could add a template that is static. In fact, this is what we did originally as a placeholder: a scaffolding of `div` tags with images, copied and pasted to repeat itself for a few rows. However, this ultimately wants to be a dynamic application where users can upload their own collections and album images. In came our need to create a new `collection.js` file to house the basic template for each album (its cover art, name, artist and # of songs). After that, we ensure on `window.onload` a function runs that replaces the contents of our `container` with the specific albums. For our example, we used the same album again, but with only the single album template in our `js` file. Then, we looped through it to create the view:

```js
var collectionContainer = document.getElementsByClassName('album-covers')[0];
collectionContainer.innerHTML = '';
for (var i = 0; i < 12; i++) {
  collectionContainer.innerHTML += collectionItemTemplate;
}
```

Easy mode enabled. Similar methods were used for the album view. When a user clicks on the album they want to listen to (in this case, they're all the same) they're brought to a view headed by the cover-art image, the artist, album name, date released, and a list of songs with their durations.

![]({{ site.baseurl}}/img/bj-ng/BJng-album-playing.png)

The opaque player-bar is added as a persistent element that continues to play and control the album when the user changes from the album view and back to their collection. Everything on this page was written using jQuery, and refactored to remove swaths of the original long-form JavaScript. Personally, I struggled a bit with the sudden transition from JavaScript to jQuery. If my writing style has impressed anything upon you by now, it's that I enjoy a bit of verbosity. At this point in the curriculum, I was just getting used to writing and reading JavaScript, and the adjustment to suddenly chopping off bits and pieces to accommodate jQuery felt unnatural. With a bit more practice throughout the application, jQuery definitely felt more useful and appropriate when trying to keep your code as concise as possible.

## Conclusion

Being my first project incorporating languages beyond the use of simple HTML and CSS, the initial click of the ‘play’ button on my project was immensely satisfying. A brief tick of a mouse button, which I have done millions of times in my life, brought a sense of pride to an application that had been built hundreds of times before me. But this one was mine. I placed that play button there. That’s my skip button. That seek bar moves because I put the code there. Throughout the exercise, you’re left wondering at the beginning of a checkpoint, “how am I supposed to do/learn all of this?” By the end, the feeling of accomplishment lingers a bit as you see what you’ve been able to complete – a working music player that teaches you how with some syntax and understanding of the flow of code, you’ll be able to create anything.

What went from a simple lesson on where to place `div` tags and how to build a `table` turned into a showcase of the simple power of JavaScript. DOM scripting was something I was very nervous about at first; how was I to suddenly go from changing the color of text to telling a program how to operate and what data to retrieve? The realization became clear soon after completing the project – it’s what you were doing the entire time. A series of characters compiled in a browser await your inputs. Those inputs dictate particular commands. Those commands alter the state of the application. And we do it over and over again.

It's what I came here for.

*Bloc Jams was completed toward the beginning of the curriculum at Bloc - February 2017. This post was written in June 2017.
