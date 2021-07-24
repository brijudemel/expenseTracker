import React, {useEffect, useState} from 'react';
//import Geolocation from '@react-native-community/geolocation';
//import Geolocation from 'react-native-geolocation-service';
import RNLocation from 'react-native-location';
//import FuelApi from '../api/FuelApi';
import axios from 'axios';

import {StyleSheet, Text, View} from 'react-native';
let Vstate = {};

const HomeScreen = () => {
  // const FuelApi2 = (latitude, longitude) => {
  //   axios
  //     .get(
  //       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
  //     )
  //     .then(function (response) {
  //       // handle success
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     });
  // };

  const [coords, setCoords] = useState({
    latitude: 0,
    longitude: 0,
  });
  useEffect(() => {
    () => {
      RNLocation.configure({distanceFilter: 0});
      RNLocation.getLatestLocation({
        timeout: 60000,
        maxWaitTime: 50000,
      }).then(latestLocation => {
        console.log(latestLocation);
        setCoords({
          latitude: latestLocation.latitude,
          longitude: latestLocation.longitude,
        });
        axios
          .get(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latestLocation.latitude}&longitude=${latestLocation.longitude}&localityLanguage=en`,
          )
          .then(function (response) {
            console.log(response);
            console.log(typeof response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      });
    };
  }, []);
  return (
    <View style={styles.screen}>
      <View />
      <Text>Home Screen </Text>
      <Text>Latitude: {coords.latitude} </Text>
      <Text>Longitude: {coords.longitude} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#FF5769',
    flex: 1,
  },
});

export default HomeScreen;
