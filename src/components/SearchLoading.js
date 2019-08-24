import React from 'react';
import * as Progress from 'react-native-progress';
import { View, StyleSheet } from 'react-native';

const SearchLoading = () => {
    return (
        <View style = { styles.main }>
            <Progress.Bar width = { null } indeterminate = { true } />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        marginVertical: 5,
        marginHorizontal: 5
    }
})
export default SearchLoading;