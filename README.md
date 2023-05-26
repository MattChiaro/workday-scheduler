# workday-scheduler

## Description

The purpose of this project was to, using starter code, create a single day calendar within the browser that you can save events to. As the day moves on, each individual hour block will be assigned different colors: one for the current hour, one for all past hours, and one for future hours. If you save a to-do list/event in an hour block, upon reloading of the page the event will remain thanks to a call to localStorage. Additionally, if you use the calendar on a date other than the day all events were saved, you are prompted if you want to clear all fields or keep them the same. This way, you can start the day with a fresh new calendar!

All time-based functions were implemented with help from ```dayjs()```, and ```jquery()``` was used to simplify functions. All calls to ```jquery()``` are wrapped in a ```document.ready()``` function to ensure they interact with the DOM properly.

## Installation

Project is live at https://mattchiaro.github.io/workday-scheduler/

## Usage

Go to above link - make sure to use save button to log your changes!

## Standard Functionality:
![gif of functionality](./assets/images/functionality-test-gif.gif)


## Modal activating upon day change:
![gif of modal active](./assets/images/Modal-test-gif.gif)

## CREDITS

The idea for the option to fully clear your calendar was inspired by another student, Trevor Kuhner. https://github.com/TKuhner

The idea for the modal was in-part aided with the help of a tutor. Previously, calendar would clear automatically upon day change without input from the user. Modal was introduced to give you the option to keep your data if need be.
