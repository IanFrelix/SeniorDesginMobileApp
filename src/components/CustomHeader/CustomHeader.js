import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import SideLogo1 from '../../../assets/ImagesForApp/grassImage.png'
import SideLogo2 from '../../../assets/ImagesForApp/grassImageFlipped.png'

const CustomHeader = () => {
    return (
        <View style={[styles.header, styles.headerColor]}>

            <Image 
                source={SideLogo1} 
                style={[styles.logo, styles.rootLeft]} 
                resizeMode="contain"
            />

            <Text style={styles.text}>
                F.A.R.M. 
            </Text>
            
            <Image 
                source={SideLogo2} 
                style={[styles.logo, styles.rootRight]} 
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontweight: 'bold',
        fontSize: 30,
        //textAlign: 'center',
        padding: 30,
        postion: "relative"
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    
    rootRight: {
        alignSelf: 'flex-end',
        padding: 20
      },
    
      //Doesn't do anything
    rootLeft: {
        alignSelf: 'flex-start',
        padding: 20
    },
    
    logo: {
        maxWidth: 100,
        maxHeight: 100,
        positon: "relative"
      },

    headerColor: {
        backgroundColor: "#36403D",
      }
    
});

export default CustomHeader;