# CS 1371 Regrade Website

The regrade website is used by CS 1371 students and TAs for managing regrades of homework submissions.

## Toolsets

The front-end of the regrade website is built on React 16.0.0. This also means `node.js` is a required tool.

The back-end of the website consists of a REST API based on PHP. Running and testing this in a development
environment requires a web server that supports PHP -- we recommend using Apache through XAMPP.

## Installing

The package must first be installed locally to generate a `node_modules` directory. This is done by typing:

> `npm install`

## Building & Testing

### Front-End Development Build

To create and view a development build of the frontend, simply open up a terminal to the base folder, and type:

> `npm start`

This will start a development server on `localhost:3000`, and will automatically run the webpage in your browser of choice.

Making changes to the source will automatically restart the development server.

Note that this will only work for testing the front-end by itself -- the back-end won't be running.

### Production Build

To generate a production build, simply open up a terminal at the base folder, and type:

> `npm run build`

This will create a new folder called `build` in the base directory.

To test the entire app with its front-end and back-end components, copy the contents
of the `build` directory to the `htdocs` subdirectory of your XAMPP installation.

Make sure Apache has been started from XAMPP, and then navigate to `localhost` in your browser.

## Deployment

Deployment to production will ideally be handled via an automated system that will automatically build, test, and upload necessary files.

Test builds are currently pushed to the web server manually. The current version can be visited here:
http://cs1371.gatech.edu/test/regrades