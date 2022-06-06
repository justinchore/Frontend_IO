# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<div class="rating-msg-container">
  <p class="rating-msg">
    You selected <span id="rating-insert"></span> out of 5
  </p>
</div>
```

```css
.rating-msg-container {
  margin-top: 2rem;
  text-align: center;
}

.rating-msg {
  display: inline-block;
  text-align: center;
  font-size: 1.4rem;
  color: hsl(25, 97%, 53%);
  border: hsl(217, 20%, 25%) solid 1px;
  border-radius: 4rem;
  padding: 0.4rem 2.8rem;
}
```

To acheive a centered paragraph element with a border that doesn't take up the entire width of the parent:

- Create a div element as a container with {text-align: center}
- text-align doesn not affect the content itself, only the content inside the element to which it is applied!
- .rating-msg paraph should be an inline-block so that the border only takes up necessary space, as opposed to the entire width of the element.
