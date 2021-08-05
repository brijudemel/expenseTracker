import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {FAB, Portal, Title} from 'react-native-paper';
import {DataContext} from '../provider/DataProvider';
import ExpenseCard from '../components/ExpenseCard';
const HomeScreen = ({navigation}) => {
  const [state, setState] = useState({open: false});
  const onStateChange = ({open}) => setState({open});
  const {data} = useContext(DataContext);
  const {open} = state;
  return (
    <View style={styles.screen}>
      <Title style={styles.mainTitle}>Expense & Income</Title>
      <View style={styles.innerView}>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <ExpenseCard expSource={item.expSource} amount={item.amount} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#eeeeee',
    flex: 1,
  },
  innerView: {
    height: '79%',
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
  mainTitle: {
    fontSize: 40,
    paddingTop: '10%',
    paddingLeft: '2%',
  },
});

export default HomeScreen;
