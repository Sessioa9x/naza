import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';

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
});

export default GalaxieFull