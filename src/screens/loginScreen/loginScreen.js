import React from 'react'
import { View, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import SideLogo from '../../../assets/ImagesForApp/grassImage.png'
import { useNavigation } from '@react-navigation/native';
//import AsyncStorage from '@react-native-async-storage/async-storage'; //Stretch goal

function loginScreen() {

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.base}>
        <View>
            <Image 
                source={SideLogo} 
                style={[styles.logo, {height: height * 0.3}, styles.rootRight]} 
                resizeMode="contain"
            />
            <Image 
                source={SideLogo} 
                style={[styles.logo, {height: height * 0.3}, styles.rootRight]} 
                resizeMode="contain"
            />
        </View>
    </ScrollView>
);
}

const styles = StyleSheet.create({

  base: {
      flex: 1,
      backgroundColor: '#3d3d3d'
  },

  root: {
    alignItems: 'center',
    padding: 20
},

  rootRight: {
      alignItems: 'right',
      padding: 20
  },

  rootLeft: {
    alignItems: 'left',
    padding: 20
},

  logo: {
      width: '95%',
      maxWidth: 500,
      maxHeight: 100,

  },
});

export default loginScreen