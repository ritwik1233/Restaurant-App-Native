import React, { useState, Fragment }from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';


const SearchItem = ({ restaurant }) => {
    const [seeMore,setseeMore] = useState(false)
    
    return (
        <View style={ styles.card }>
            <Image 
                style = { styles.cardImage } 
                source = {{ uri: restaurant['featured_image'] }}
            />
            <View style = { styles.cardRibbonContainer }>
                {
                    restaurant['highlights'].map((eachData, key) => {
                        return <Text style = { styles.cardRibbons } key = { key } > { eachData } </Text>
                    })
                }
            </View>
            <Text style = { styles.cardHeader }> { restaurant['name'] } </Text>
            <Text style = {styles.cardContent}> Average cost for two : { restaurant['average_cost_for_two'] } </Text>
            <Text style = {styles.cardContent}> { restaurant['location']['address'] } </Text>
            {seeMore  && <Fragment>
                <Text style = {styles.cardContent}>Cuisines : { restaurant['cuisines'] } </Text>
                <Text style = {styles.cardContent}>Timings : { restaurant['timings'] } </Text>
                <Text style = {styles.cardContent}>Rating : { restaurant['user_rating']['aggregate_rating'] + '  ' + restaurant['user_rating']['rating_text'] } </Text>      
            </Fragment>
            }
            <Button
                style = { styles.cardButton }
                title = { seeMore ? 'See less Details' : 'See more Details' }
                onPress = { () => {
                    setseeMore(!seeMore)
                }}
            />
            
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        elevation: 1,
        marginVertical: 15,
        marginHorizontal: 15,
        shadowColor: '#000',
        shadowOffset: { 
            width: 0, 
            height: 2 
        },
        shadowOpacity: 0.8,
        shadowRadius: 2
    },

    cardImage: {
        height: 100
    },

    cardRibbonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 4,
        marginHorizontal: 4
    },
    cardRibbons: {
        backgroundColor: '#C8C8C8',
        borderRadius: 8 ,
        marginHorizontal: 3,
        marginVertical: 3,
        fontSize: 10,
        padding: 2
    },

    cardHeader: {
        fontWeight: '400',
        fontSize: 20
    },

    cardButton:{
        alignSelf: 'flex-end',
        flex: 1
    },

    cardContent: {
        padding: 5,
        fontSize: 10
    }
});

export default SearchItem;