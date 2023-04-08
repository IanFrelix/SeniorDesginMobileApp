import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function registerScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.base}>
      <View>
        <CustomHeader />
      </View>

      <View style={{ alignItems: 'center' }}>
        <CustomInput />
        <CustomInput />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  base: {
    backgroundColor: '#3d3d3d'
  },
});

export default registerScreen