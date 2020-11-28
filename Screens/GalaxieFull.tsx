import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import axios from 'axios';
import { Galaxie } from '../Type';
import GalaxieItem from '../Components/GalaxieItem';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { FlatList } from 'react-native-gesture-handler';
import GalaxieList from '../Components/GalaxieList';
import { addDays } from 'date-fns/esm';


type Props = {
    navigation: any
    route: any
}

const GalaxieFull: React.FC<Props>  = ({route, navigation}) => {
    const {galaxie} = route.params?route.params:route
    return(
        <>
            <View style={styles.container}>
            <ImageBackground 
				source={{uri : galaxie?.url}}
				style={{width: "100%", height: "100%"}} 
			>
            </ImageBackground>
            </View>
        </> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'space-between',
        backgroundColor: '#000000',
      },
    containerTop: {
        flex: 0.2,
        backgroundColor: '#000000',
      },
    containerBot: {
        flex: 1,
        backgroundColor: '#000000',
      },
});

export default GalaxieFull