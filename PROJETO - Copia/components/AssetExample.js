import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
     
      <Image style={styles.logo} source={require('../flores.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
      
  
   backgroundColor:'#231f20',

  },

  logo: {
     
    overflow:'hidden',
    height: 150,
    width: '100%',
    
  }
});
