# GoodMorning Skills Assessment

## Project Title
GoodMorning Skin Care - Product Card Assessment

## Overview
This project is a front-end assessment where I built a responsive product card UI with some interactive JavaScript features. The goal was to make a simple, clean, and functional interface that works across devices.

## Features
- Product cards adjust smoothly for mobile and desktop screens.  
- Hover and focus effects on the cards and "Add to Cart" button to give visual feedback.  
- Cart counter updates in real-time when a product is added.  
- Multiple product cards are rendered dynamically from a JavaScript array.  
- Semantic HTML and accessible design with ARIA attributes and checked colour contrast.  

## Technologies Used
- HTML5  
- CSS3/SCSS  
- Vanilla JavaScript  

## Approach and Notes
- I kept the design clean and minimal to make the content easy to read and keep the cards visually consistent.  
- Used `header` for the site title and cart counter, and `section` for each product card to keep the structure semantic.  
- On desktop, cards have a fixed max-width so images don’t stretch too much, but they remain responsive on smaller screens.  
- Flexbox and Grid handle layout across breakpoints, so cards stack on small screens and line up nicely on larger ones.  
- JavaScript dynamically generates the product cards and updates the cart counter when items are added.  
- Accessibility was a focus, with `aria-live` for cart updates, focus states for buttons, and colour contrast verified for readability.  

## How to Run
1. **Clone the repo:** `git clone <repo url>`  
2. **Compile SASS:** `sass styles.scss styles.css --watch`  
3. Open `index.html` in a browser  
4. Click "Add to Cart" to see the counter update
