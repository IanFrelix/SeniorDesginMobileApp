import React from 'react'
import { View, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
//import AsyncStorage from '@react-native-async-storage/async-storage'; //Stretch goal

function loginScreen() {

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.base}>
        <View style={styles.header}>
            <CustomHeader />
        </View>
    </ScrollView>
);
}

const styles = StyleSheet.create({

  base: {
    backgroundColor: '#3d3d3d'
  },
});

export default loginScreen