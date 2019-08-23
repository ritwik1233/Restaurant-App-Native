import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const SearchBar = ({city, cuisine, onCityChange, onCitySubmit, onCuisineChange, onCuisineSubmit, onDataSubmit }) => {
    return (
        <View>
            <View style = { styles.backgroundStyle }>
                <MaterialIcons 
                    name = 'location-city' 
                    style = { styles.iconStyle }
                />
                <TextInput
                    style = { styles.textStyle } 
                    placeholder = 'Enter City'
                    value = { city }
                    autoCapitalize = 'none'
                    autoCorrect = { false }
                    onChangeText = { onCityChange }
                    onEndEditing = { onCitySubmit }
                />
            </View>
            <View style = { styles.backgroundStyle }>
                <MaterialCommunityIcons 
                    name = 'food' 
                    style = { styles.iconStyle }
                />
                <TextInput
                    style = { styles.textStyle } 
                    placeholder = 'Enter Cuisine'
                    value = { cuisine }
                    autoCapitalize = 'none'
                    autoCorrect = { false }
                    onChangeText = { onCuisineChange }
                    onEndEditing = { onCuisineSubmit }
                />
            </View>
            <View style = { styles.buttonBackground }>
                <Button
                    buttonStyle = { styles.button }
                    title = 'Search'
                    onPress = { onDataSubmit }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 10,
        flexDirection: 'row',
    },
    textStyle: {
        fontSize: 18,
        flex: 1
    },
    iconStyle : {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    },
    buttonBackground: {
        marginVertical: 10,
        marginHorizontal: 15
    },
    button: {
        borderRadius: 5
    }
});

export default SearchBar;