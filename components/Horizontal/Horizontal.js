import React from 'react';
import { StyleSheet, ScrollView, Text, View, Dimensions } from 'react-native';

export default function Horizontal() {
  return (

    <ScrollView horizontal={true} 
    pagingEnabled={true} 
    style={styles.container}>
         
          <View style={styles.outer}>
            <Text style={styles.text}>What Up!</Text>
          </View>

          <View style={[styles.outer, styles.orange]}>
            <Text style={styles.text}>This Is The Next Screen!</Text>
          </View>

          <View style={[styles.outer, styles.green]}>
            <Text style={styles.text}>Keep Scrolling Dummy!</Text>
          </View>

    </ScrollView>
     
   
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  outer: {
    backgroundColor: '#007bb6',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  orange: {
    backgroundColor: '#ffa500',
  },
  green: {
    backgroundColor: '#008000',
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontWeight: "600",
  }
});
