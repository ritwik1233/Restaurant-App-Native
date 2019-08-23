import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const SearchError = ({ error }) => {
    return (
        <View style = { styles.errorBackground }>
            <Text style = { styles.errorText }> { error } </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    errorBackground: {
        marginHorizontal: 15
    },
    errorText: {
        fontSize : 14,
        fontWeight: '400',
        color: 'red'
    }

})

export default SearchError;