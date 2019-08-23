# Restaurant-App-Native

## Project Description 

* The project is a simple react-native app used to display all the restaurants with a particular cuisine and particular city .
* The project uses [zomato api](https://developers.zomato.com) and also [google geocode api](https://developers.google.com/maps/documentation/geocoding/start)   .

## Project Setup 

### Keys Setup

* Generate the zomato api key and google geocode api key from the respective website .
* Create a new folder in called keys in /src folder .
* Create a new file called keys.js inside src/keys .
* Add the below code in keys.js file . 
```
const keys = {
    ZomatoAPIKey : <Your-Zomato-API>,
    GeocodeApIKey : <Your-Geocode-API>,
}
module.exports = keys;
```
### Project Dependencies
* Run command " npm install --save " to install the project dependencies .

