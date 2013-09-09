KitchenSink [![Build Status](https://travis-ci.org/acolchado/KitchenSink.png?branch=master)](https://travis-ci.org/acolchado/KitchenSink)
===========

AngularJS directives and services to help with common application tasks.


# Install
NodeJS and Bower are both required. If you need to install NodeJS, please visit http://nodejs.org/.

Once you have NodeJS and NPM (Node Package Manager) installed, execute the following steps.

## Install

    // Install bower package manager
    $ npm install -g bower

    // Install npm packages
    $ npm install

    // Install bower packages
    $ bower install

# Development

## Running Unit Tests

    $ grunt test

## Building

In order to build the

    $ grunt build

## Build, watch for changes, and preview the site

The following command builds, runs the tests, watches for changes and rebuilds the preview site. It also launches the preview site in the browser.

    $ grunt dev

## Theme/Style Changes to the example site

All of the custom styles are store in the _less/ directory.

Files:

 * _less/variable-overrides.less - Imports the bootstrap variables file and overrides variables. Custom colors, margins, etc should be added here.
 * _less/theme.less - This file will house custom css that isn't covered in the base bootstrap theme. Buttons, containers, anything custom goes here. Allows for easier upgrading of bootstrap.
 * 

# Work in progress

## Items in progress

### Geo Location Service (Current Location)

This service is used to create a wrapper around the window.navigator.geolocation HTML5 API.

TODO:
- [x] Code feature
- [x] Unit tests
- [ ] Integration tests
- [ ] Feature test on browsers and devices

## Upcoming

Here a list of features that are coming up in this repo due to projects in progress:

Services
 * Google Maps API Geo Coding service
 * Local Storage Service with Cookies as fallback

Directives
 * Hide Mobile Navigation Bar for iOS and any other browser that supports it

