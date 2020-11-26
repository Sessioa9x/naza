import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import { Galaxie } from '../Type';



const Home  = () => {
    const [galaxie, setGalaxie] = useState<Galaxie>()

    useEffect(()=>{
        const asyncFunction = async () => {
            const res = await axios.get('https://api.nasa.gov/planetary/apod?api_key=Efs2dOcIFao5dYnZNxNfvBfjMqSCwuLrKh7ri3Py')
            
            setGalaxie(res.data);
        }
        asyncFunction();
    }, [])

    console.log(galaxie);
    return(
        <View style={styles.container}>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor: '#fff',
      },
});

export default Home