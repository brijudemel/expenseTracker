import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react';
import database from '@react-native-firebase/database';
import {AuthContext} from './AuthProvider';
export const DataContext = createContext();

export const DataProvider = ({children}) => {
  const [data, setData] = useState([]);
  //const {user} = useContext(AuthContext);
  //const id = user.uid;
  // useEffect(() => {
  //   setTimeout(() => {
  //     fetchData(user.uid);
  //   }, 2000);
  // });

  const fetchData = async Id => {
    await database()
      .ref('/users/' + Id + '/data')
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());
        setData(snapshot.val());
        console.log(data);
      });
  };
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        writeData: async Id => {
          await database()
            .ref('users/' + Id)
            .update({data: data});
        },
        readData: async Id => {
          fetchData(Id);
        },
      }}>
      {children}
    </DataContext.Provider>
  );
};
