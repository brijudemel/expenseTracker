import React, {useEffect, useState, useContext} from 'react';
import RNLocation from 'react-native-location';
import axios from 'axios';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {FAB, Portal} from 'react-native-paper';
import database from '@react-native-firebase/database';
import {AuthContext} from '../provider/AuthProvider';
const HomeScreen = ({navigation}) => {
  const [state, setState] = useState({open: false});

  const onStateChange = ({open}) => setState({open});
  const {user} = useContext(AuthContext);
  const {open} = state;

  return (
    <View style={styles.screen}>
      <Text>Home Screen </Text>
      <FlatList />
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
