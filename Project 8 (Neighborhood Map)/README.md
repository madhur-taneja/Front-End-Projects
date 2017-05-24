# Neighbourhood Map Project

Open and view the Project using the `.zip` file provided or at my [Github Repository](https://github.com/madhur-taneja/Front-End-Projects) having folder `Neighborhood Map`.

## Getting started

* The aim of this Project is to make a "Map of a Neighborhood" showing famous local Eating Joints with their ratings.

#### Tools required:
* [Google Maps API](https://developers.google.com/maps/web/) to load map.
* [Foursquare API](https://foursquare.com/developers/app/XQ2I0ONGSSVL1DYQYSK2Q0ERIM5ASTRANA5FRG41HTTXVKQB) to fetch data for the eating joints.
* [Foursquare API Explorer] to fetch ratings(or other details if required).
* [Knockout Javascript](http://knockoutjs.com/downloads/knockout-3.4.2.js) to bind data.
* [jQuery](https://code.jquery.com/jquery-3.2.1.min.js) (Javascript Library) for easier coding of javascript.
* [Bootstrap](https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css) to make the page responsive.
* [Google Fonts](https://fonts.google.com/specimen/Pacifico?selection.family=Pacifico) to add stylish text.
* [Color-Hex](http://www.color-hex.com/) to add hexa-decimal color codes in css.
* [HTML Beautifier](http://www.freeformatter.com/html-formatter.html) to Beautify HTML.
* [CSS Beautifier](http://www.freeformatter.com/css-beautifier.html) to Beautify CSS.
* [JS Beautifier](http://www.freeformatter.com/javascript-beautifier.html) to Beautify JS.
* [Online Markdown Editor](http://dillinger.io/) to test `README.md`.
* [Google Maps Animation](https://developers.google.com/maps/documentation/javascript/examples/marker-animations) to animate markers.

#### References:
> [Udacity's Github Repository](https://github.com/udacity/ud864)
* This repository was provided in [Lesson 17](https://classroom.udacity.com/nanodegrees/nd001/parts/e87c34bf-a9c0-415f-b007-c2c2d7eead73/modules/4fd8d440-9428-4de7-93c0-4dca17a36700/lessons/8304370457/concepts/83122494440923).
* References for /* -----S-H-O-W---A-N-D---H-I-D-E---F-U-N-C-T-I-O-N-S---F-O-R---M-A-R-K-E-R-S */, /* -----M-A-R-K-E-R-----S-T-Y-L-I-N-G----- */, /* -----D-R-A-W-I-N-G-----T-O-O-L-B-A-R----- */ were taken from [here](https://github.com/udacity/ud864/blob/master/Project_Code_7_Drawing.html).
> References for Knockout Javascript were taken from [here](http://knockoutjs.com/documentation/event-binding.html).
> References for creating Navbar from [here](https://codepen.io/simoberny/pen/pJZJQY).

## Steps to run the app:
> Open the project through the `.zip` file provided and extract file.
> To open `Index.html`:
* Open the main folder.
* Open `Index.html`.
* Click on the list or the markers on map to see ratings for that particular Eating Joint.
> To open `app.js`:
* Open `js` folder in `main` folder.
* Open `app.js`.

## Steps to make the app:
#### Part 1: Google Maps API and Foursquare API
* Generate a unique key from [Google Maps API](https://developers.google.com/maps/web/) and create `Index.html`.
* Set the center and zoom accordingly.
* Sign up on `foursquare.com`, create a new app which which provide `CLIENT_ID` and `CLIENT_SECRET` for that app. These unique ID's will be used for fetching data from `foursquare.com` using `AJAX`.

#### Part 2: Include jQuery and Knockout Javascript
* Use the above mentioned links and append them in `Index.html`.

#### Part 3: Include CSS file, Bootstrap library and Google Fonts
* Create a `style.css` file in `css folder` with all required styling and link it to `Index.html`.
* Use the above mentioned link for `Bootstrap` and link it in `Index.html`.
* Use the above mentioned link for `Google Fonts` and link it in `Index.html` and `style.css`.

#### Part 4: Creating and coding Javascript in app.js and init.js
> Create `initMap` and `navToggle` functions in `init.js`.
> Now in `app.js`, Create an object of eating joints with their name, coordinates and unique Id generated from [foursquare.com].
> Create `Viewmodel` function with functions to:
* Create Markers.
* Fetch information for Markers from [foursquare.com] using `AJAX` request.
* Create Infowindows with relevent information.
* Display information fetched from [Foursquare API Explorer] on clicking them.
* Style Markers. 
* Show selected Marker.
* Bind data for `Search Bar` using `Knockout Javascript`. 
* Show and Hide Markers.
* Create, toggle and add features to `Drawing Toolbar`.

App is completed! Have fun exploring delicious places!

[foursquare.com]: <https://foursquare.com/explore?mode=url&ne=28.596279%2C77.060477&q=Food&sw=28.585784%2C77.045778)>
[Foursquare API Explorer]: <https://developer.foursquare.com/docs/explore#req=venues/50d6d789498ee282996ddce4>