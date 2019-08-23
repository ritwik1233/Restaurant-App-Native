import React , { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import SearchError from '../components/SearchError';

import geocodeAPI  from '../api/geocode';
import zomatoAPI from '../api/zomato';
import keys from '../keys/keys';

const SearchScreen = () => {    
    const [city,setCity] = useState('');
    const [cuisine,setCuisine] = useState('');
    const [restaurants,setRestaurants] = useState({});
    const [error,setError] = useState('');
    
    const onDataSubmit = () => {
        if (city && cuisine) {
            geocodeAPI.get('/geocode/json?address=' + city + '&key='+keys.GeocodeApIKey)
                .then(result => {
                    const geocodeData = result.data['results'][0]['geometry']['location'];
                    zomatoAPI.get('/cuisines?lat=' + geocodeData.lat + '&lon=' + geocodeData.lng)
                        .then(cuisines => {
                            const cuisineUpdated = cuisine.substring(0,1).toUpperCase()+cuisine.substring(1);
                            const cuisineID = cuisines.data.cuisines.findIndex( data => {
                                    return data.cuisine.cuisine_name === cuisineUpdated;
                            })
                            if(cuisineID !== -1) {
                                zomatoAPI.get('/search?entity_type=city&lat=' + geocodeData.lat + '&lon=' + geocodeData.lng + '&cuisines=' + cuisineID)
                                .then(restaurants => {
                                    setRestaurants(restaurants.data);
                                    setError('');
                                }).catch(err => {
                                    console.log('Restaurant error');
                                    console.log(err);
                                    setError('The search result does not exists' );
                                });
                            } else {
                                setError('cuisine entered is invalid ');    
                            }
                        }).catch(err => { 
                            console.log('Cuisine error');
                            console.log(err);
                            setError('cuisine entered is invalid ');
                    });      
                }).catch(err => {
                    console.log('Geolocation error');
                    console.log(err);
                    setError('city entered is invalid ');
            });
        } else {
            setError('Search result is empty');
        }
    }
    return (
            <View>
                <SearchBar 
                    city = { city }
                    cuisine = { cuisine }
                    onCityChange = { (newCity) => {
                        setCity(newCity );
                    }} 
                    onCuisineChange = { (newcuisine) => {
                        setCuisine(newcuisine);
                    }}
                    onDataSubmit = { onDataSubmit }
                />
                { error.length > 0 && <SearchError error = { error } /> }
                { (restaurants.restaurants && restaurants.restaurants.length > 0) && <SearchResult restaurants = { restaurants }  /> }
            </View>
        );
}


const styles = StyleSheet.create({
});

export default SearchScreen;