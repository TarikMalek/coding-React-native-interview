import React,{useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
const {width,height} = Dimensions.get('window');


export default ()=>{

    return <>
            <View style={styles.spinnerContainer}>
                <LottieView 
                    source={require('../assets/animations/weather-animation.json')}
                    style={styles.spinner}
                    resizeMode='cover'
                    autoPlay
                    
                />
                    
            </View>
    </>
}


const styles = StyleSheet.create({


  spinnerContainer:{
      justifyContent: 'center',
      alignItems:'center',
      alignContent:'center',
  },
  spinner :{
      height:height*.08,
      width :  width*.16,
  },
  });