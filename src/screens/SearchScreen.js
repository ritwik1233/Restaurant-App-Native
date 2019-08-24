import React , { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import SearchError from '../components/SearchError';
import SearchLoading from '../components/SearchLoading';

import zomatoAPI from '../api/zomato';

const SearchScreen = () => {    
    const [city,setCity] = useState('');
    const [cuisine,setCuisine] = useState('');
    const [restaurants,setRestaurants] = useState({});
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
    const onDataSubmit = async () => {
        setLoading(true)
        if (city && cuisine) {
            try {
                const cities = await zomatoAPI.get(`/cities?q=${city.trim()}`);
                const cityID = cities.data['location_suggestions'].length > 0 ? cities.data['location_suggestions'][0].id : ( function () { throw 'Invalid city entered' } () ) ;
                const cuisineArray = await  zomatoAPI.get(`/cuisines?city_id=${cityID}`)
                let cuisineResultArray = cuisineArray.data.cuisines.filter( data => {
                        return data.cuisine.cuisine_name.toLowerCase() === cuisine.toLowerCase();
                });
                if(! cuisineResultArray.length > 0) {
                    throw 'Invalid! cusine entered';
                }
                const cuisineID = cuisineResultArray[0].cuisine.cuisine_id;
                const restaurantsRequest = await zomatoAPI.get(`/search?entity_id=${cityID}&entity_type=city&cuisines=${cuisineID}`)
                const restaurants = restaurantsRequest.data;
                if(! restaurants.restaurants.length > 0 ) {
                    throw 'No Result Found';
                }
                setRestaurants(restaurants);
                setLoading(false);
                setError('');
            } catch (e) {
                setError(e);
                setLoading(false);
                console.log(e);
            }
        } else {
            setError('Search fields are empty');
        }
    }
    return (
            <View>
                { loading && <SearchLoading /> }
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