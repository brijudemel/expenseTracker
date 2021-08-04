import React, {createContext, useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
export const DataContext = createContext();

export const DataProvider = ({children}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async Id => {
    setIsLoading(true);
    await database()
      .ref('/users/' + Id + '/data')
      .once('value')
      .then(async snapshot => {
        console.log('User data: ', snapshot.val());
        setData(snapshot.val());

        // console.log(data);
      });
  };
  useEffect(() => {
    setIsLoading(false);
  }, [data]);

  return (
    <DataContext.Provider
      value={{
        isLoading,
        setIsLoading,
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
