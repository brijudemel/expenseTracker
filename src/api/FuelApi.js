import axios from 'axios';
import React, {useState, useEffect} from 'react';

const FuelApi = (latitude, longitude) => {
  // const [price,setPrice]=useState(null);
  // eslint-disable-next-line prettier/prettier
  axios
    .get(
      `https://fuel-v2.cc.api.here.com/fuel/stations.json?app_id=${process.env.FUEL_API_ID}&app_code=${process.env.FUEL_API_KEY}&prox=${latitude},${longitude},5000&`,
    )
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
  // useEffect(async()=>{

  // },[])
};
export default FuelApi;
