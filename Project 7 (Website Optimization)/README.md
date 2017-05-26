# Website Performance Optimization portfolio project

Open and view the Project using `.zip` file provided or at my [Github Repository](https://github.com/madhur-taneja/Front-End-Projects) having folder `Website Optimization`.

## Getting started
* As web applications become increasingly interactive and accessed on a variety of devices there are a variety of opportunities in which performance issues can hinder the user experience. This project presents a number of those performance issues and provided an opportunity to showcase my skills in identifying and optimizing web applications.

#### Tools required:

* [CSS Minifier](https://cssminifier.com/)
* [JS Minifier](https://javascript-minifier.com/)
* [Kraken.io](https://kraken.io/) and [Optimizilla](http://optimizilla.com/)
* [PageSpeed Tools](https://developers.google.com/speed/pagespeed/insights/)

#### Steps to run the app:
> Open the project through the `hosting link` provided above or through the `.zip` file provided and extract file.
> To open `index.html`:
* Open the main folder.
* Open `index.html`.
> To open `pizza.html`:
* Open `view` folder in main folder.
* Open `pizza.html` in `view`.
* `pizza.html` can also be opened through `Cam's Pizzeria` link in `index.html`.
> To open `main.js`:
* Open `js` folder in `view` folder.
* Open `main.js`.

## Optimizing the performance:

### Part 1: Optimize PageSpeed Insights score for index.html

* The aim of this project was to optimize index.html to a pageinsight speed score above 90.
* My score was: 95 for Mobile and 96 for Desktop version.

#### Step 1: Optimizing `index.html`
> Unlinking style.css and making it internal after minifying it.
> Using media query "print" on print.css.
> Shifting script tags from head to end of body and using async attribute on them.

### Part 2: Optimize Frames per Second and Pizza Resize Time in pizza.html
* The aim of this project was to optimize pizza.html to 60 fps scrolling speed and to reduce pizza resize time less than 5 ms.

#### Step 1: Optimizing `pizza.html`
> Shifting script tags from head to end of body.

#### Step 2: Optimizing `main.js`
> Minified js for arrays.
> Changes in `changePizzaSizes()` function.
* Declaring rPC and dx outside the loop as it was being declared again and again.
> Changes in `UpdatePosition()` function.
* Declaring phase outside the loop as it was being declared again and again.
> Changes in `document.addEventListener()`.
* Reducing the number of times the loop runs as image will be generated lesser number of times.

Congrats ! Your web page is now Optimized.
