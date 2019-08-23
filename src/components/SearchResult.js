import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import SearchItem from './SearchItem';

const SearchResult = ({ restaurants }) => {

    const keyExtractor = (data) => {
        return data.restaurant.R.res_id.toString();
    }
    const renderItem = (element) => {
        return (
            <SearchItem restaurant = { element.item.restaurant } />
        );
    }
    return (
        <View  style = { styles.main }>
            <FlatList
                keyExtractor = { keyExtractor } 
                data = { restaurants.restaurants } 
                renderItem = { renderItem } />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        marginTop: 10,
        marginBottom: 380
    }
})
export default SearchResult;
