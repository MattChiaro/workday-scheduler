# workday-scheduler

## Description

The purpose of this project was to, using starter code, create a single day calendar within the browser that you can save events to. As the day moves on, each individual hour block will be assigned different colors: one for the current hour, one for all past hours, and one for future hours. If you save a to-do list/event in an hour block, upon reloading of the page the event will remain thanks to a call to localStorage.

All time-based functions were implemented with help from ```dayjs()```, and ```jquery()``` was used to simplify functions. All calls to ```jquery()``` are wrapped in a ```document.ready()``` function to ensure they interact with the DOM properly.

## Installation

Project is live at https://mattchiaro.github.io/workday-scheduler/

## Usage

Go to above link - make sure to use save button to log your changes!

![gif of functionality](./assets/images/functionality-test-gif.gif)
