import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import { Galaxie } from '../Type';

type Props = {
    galaxie: Galaxie
    navigation:any
}


const GalaxieList: React.FC<Props>  = ({galaxie,navigation}) => {
    //console.log(galaxie?.date)
    return(
        // <>
            <View style={styles.box} >
                <TouchableOpacity onPress={() => {
					navigation.navigate('Home', {
                        galaxie: galaxie,
					});
				}}>
                    <ImageBackground 
                        source={{uri : galaxie?.url}}
                        style={ styles.image} 
                        imageStyle={{ borderRadius: 15}}
                    >
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        //</>
    );
}

const styles = StyleSheet.create({
    box: {
        width:80,
        height:80,
        margin: 5,
    },
    image: {
        width:"100%",
        height:"100%",
        borderRightColor:"#9370DB",
        borderRightWidth: 2,
        borderLeftColor:"#9370DB",
        borderLeftWidth: 2,
        borderBottomColor:"#9370DB",
        borderBottomWidth:2,
        borderTopColor:"#9370DB",
        borderTopWidth: 2,
        borderRadius: 18,
    },
});

export default GalaxieList