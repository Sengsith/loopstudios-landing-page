# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.png)
![](./screenshot2.png)
![](./screenshot3.png)

### Links

- Solution URL: [GitHub](https://github.com/Sengsith/loopstudios-landing-page)
- Live Site URL: [Netlify](https://phenomenal-crepe-e8582d.netlify.app)

## My process

My main thought process was thinking about trying to implement grid in the most implicit way possible to maintain cleaner CSS. I think I overall did a good job with everything. My work order started with spending some time analyzing the design, creating custom properties, writing HTML, writing JS, then finshing up with all of the CSS. 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [SASS](https://sass-lang.com/) - CSS Pre-processor

### What I learned

I learned a lot about grid in this project which is great as it was my main goal. I also learned a little about when it's a good time to have wrappers over certain tags as well. An example of that is in my creations grid item so I can get a linear gradient without sacrificing the width of the ```h``` tag:

```html
<div class="grid-item">
  <div class="grid-item-wrapper">
    <h3>DEEP EARTH</h3>
  </div>
</div>
```

I am wondering if there is just a better way to do it. My first iteration of this was WITHOUT a wrapper div and just the ```h3``` tag inside the grid-item parent. I had a problem with that later on though with controlling the linear gradient without having unwanted width on the text itself. 

I also learned that you can select multiple children in a sequence with ```(n + x)``` where n is if you want to start from x, where x is the number you want to start from. Making ```n``` negative will make it so it will go UP TO x. So we can set a range such as:

```css
.grid-item:nth-child(n+3):nth-child(-n+10):hover {...}
```

I also started writing more responsive lines such as ```width: min(90%, 60rem)``` which I feel is a lot cleaner than whatever I was doing before which was fairly static and only changed with media queries.

### Continued development

I'm glad I was able to learn and get more practice on grid but, I also feel like I could make my CSS and HTML cleaner due to having more explicit declarations than I wanted. There were a few chunks of code where it seems like I wrote it explicitly where I could have done it implicitly as well. My SASS structuring also isn't the best, but I know that I can make it cleaner by making sure that my selectors are within the right folders and files.

## Author

- Frontend Mentor - [@Sengsith](https://www.frontendmentor.io/profile/Sengsith)
