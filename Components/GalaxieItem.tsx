import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Galaxie } from '../Type';

type Props = {
    galaxie: Galaxie
    navigation: any
}

const GalaxieItem: React.FC<Props>  = ({galaxie, navigation}) => {
    //console.log(galaxie?.date)
    return(
        <View style={styles.container} >
            <TouchableOpacity onPress={() => {
                navigation.navigate('GalaxieFull', {
                    galaxie: galaxie,
                });
            }}> 
                <ImageBackground 
                    source={{uri : galaxie?.url}}
                    style={{width: "100%", height: "100%"}} 
                >
                    <LinearGradient 
                    colors={['rgba(0,0,0,1)', 'transparent']}  
                    style={{
                        position: 'absolute', 
                        left: 0,
                        right: 0,
                        bottom: 0,
                        //height: 300,
                    }}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    >
                        <Text style={styles.title}>
                            {galaxie?.title}
                        </Text>
                        <Text style={styles.explanation}>
                            {galaxie?.explanation}
                        </Text>
                    </LinearGradient>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width:"100%",
        height:"100%",
      },
    title: {
        fontWeight: '800',
        fontSize: 42,
        padding: 16,
        color:"white",
    },
    explanation: {
        padding: 16,
        color:"white",
    },
});

export default GalaxieItem