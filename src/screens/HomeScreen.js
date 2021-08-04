import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {FAB, Portal} from 'react-native-paper';
import {DataContext} from '../provider/DataProvider';
const HomeScreen = ({navigation}) => {
  const [state, setState] = useState({open: false});

  const onStateChange = ({open}) => setState({open});
  const {data} = useContext(DataContext);
  const {open} = state;
  return (
    <View style={styles.screen}>
      <Text>Home Screen </Text>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <Text>
              ExpSource:{item.expSource} amount:{item.amount}
            </Text>
          );
        }}
        keyExtractor={() => Math.floor(1000 + Math.random() * 9000)}
      />
      <View>
        <Portal>
          <FAB.Group
            style={styles.fab}
            open={open}
            icon={open ? 'minus' : 'plus'}
            actions={[
              {
                icon: 'cash',
                label: 'Income',
                onPress: () => navigation.navigate('AddIncome'),
              },
              {
                icon: 'currency-usd',
                label: 'Expense',
                onPress: () => navigation.navigate('AddExpense'),
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#FF5769',
    flex: 1,
  },
  roundButton: {
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#009387',
  },

  fab: {
    paddingRight: 20,
    paddingBottom: 125,
  },
  plus: {
    fontSize: 30,
    color: '#ffffff',
  },
});

export default HomeScreen;
