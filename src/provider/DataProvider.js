import React, {createContext, useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
export const DataContext = createContext();

export const DataProvider = ({children}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [income, setIncome] = useState([]);
  // const [totalIncome, setTotalIncome] = useState(0);
  // const [totalExpense, setTotalExpense] = useState(0);
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
    // data.forEach(arrayItem => {
    //   setTotalExpense(prev => prev + arrayItem.amount);
    // });
  };
  const fetchIncome = async Id => {
    setIsLoading(true);
    await database()
      .ref('/users/' + Id + '/income')
      .once('value')
      .then(async snapshot => {
        console.log('User income: ', snapshot.val());
        setIncome(snapshot.val());
        //console.log(income);
      });
    // income.forEach(arrayItem => {
    //   setTotalIncome(prev => prev + arrayItem.incAmount);
    // });
  };

  useEffect(() => {
    setIsLoading(false);
  }, [data, income]);

  return (
    <DataContext.Provider
      value={{
        isLoading,
        setIsLoading,
        data,
        setData,
        income,
        setIncome,
        // totalExpense,
        // totalIncome,
        writeData: async Id => {
          await database()
            .ref('users/' + Id)
            .update({data: data});
        },
        readData: async Id => {
          fetchData(Id);
        },
        writeIncome: async Id => {
          await database()
            .ref('users/' + Id)
            .update({income: income});
        },
        readIncome: async Id => {
          fetchIncome(Id);
        },
      }}>
      {children}
    </DataContext.Provider>
  );
};
