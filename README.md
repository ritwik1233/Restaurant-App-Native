# Restaurant-App-Native

## Project Description 

* The project is a simple react-native app used to display all the restaurants with a particular cuisine and particular city.
* The project uses :- 
    * [zomato api](https://developers.zomato.com)
    * [google geocode api](https://developers.google.com/maps/documentation/geocoding/start)

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

## Run Setup

### Run (Dev Mode) External Android Device

* To run on external device make sure you have [Expo android app](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_IN) installed on your device .
* Connect your device on your system and make sure usb debugging is enabled on your device
* Open the project in terminal window and run the command "npm start" .
* Open browser window on your system and navigate to http://localhost:19002 .There will be a QR-code on the webpage.
* Open Expo application on your device .
* Scan the QR code using expo application.
* This will start the application on the device in development mode.
