import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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

const Home: React.FC<Props>  = ({route, navigation}) => {
    const [galaxies, setGalaxie] = useState<Galaxie[]>([])
    let dateEnd = format(new Date(),"yyyy-MM-dd");
    let date = subDays(new Date(),7);
    let dateStart = format(date,"yyyy-MM-dd");
    //console.log(date);

    const asyncFunction = async () => {
        const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=Efs2dOcIFao5dYnZNxNfvBfjMqSCwuLrKh7ri3Py&start_date=${dateStart}&end_date=${dateEnd}`)
        setGalaxie(res.data);
    }

    React.useEffect(()=>{
        asyncFunction();
    }, []);

    const galaxiesSorted = galaxies.sort((a,b) => a.date < b.date ? 1:-1)

    const {galaxie} = route.params?route.params:route

    const renderItem = ({ item }: { item: Galaxie }) => (
        <GalaxieList galaxie={item} navigation={navigation}/>
    );
    
    //.then(res => setGalaxie(res.data))
    //console.log(test);
    return(
        <>
            <View style={styles.container}>
                <View style={styles.containerTop}>
                    <FlatList
                        data={galaxiesSorted}
                        renderItem={renderItem}
                        keyExtractor={galaxie => galaxie.date}
                        horizontal={true}
                    />
                </View>
                <View style={styles.containerBot}>
                    <GalaxieItem galaxie= {galaxie?galaxie:galaxiesSorted[0]}>
                        
                    </GalaxieItem>
                </View>
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

export default Home