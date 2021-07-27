import React, {createContext, useState} from 'react';
import database from '@react-native-firebase/database';
export const DataContext = createContext();

export const DataProvider = ({children}) => {
  const [data, setData] = useState([]);
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
      }}>
      {children}
    </DataContext.Provider>
  );
};
