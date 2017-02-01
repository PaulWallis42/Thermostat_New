# Thermostat

This is a simple bank thermostat app that allows you to increase and decrease temperature.

Features of the app include a power saving option and a form which accepts the name of a city and on submission will fetch the current temperature of that city via an API.

The app is written in Javascript and uses Jasmine for Test Driven Development.  The api consumed is from openweather.org (this seems to work on most cities but can get confused with some). 

## Getting Started
To use the app simply download to your local machine and in the command line from that directory run 'open index.html'

To run the tests you can run 'open SpecRunner.html' from the same base directory.

## Using the app
The app is quite self explanatory, increase / decrease the temperature and activate / deactivate the power saving function using the relevant buttons.

To find the current temperature in a given city type the city name into the form field and click submit.  The city temperature should automatically update.
