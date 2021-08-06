import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import StatsScreen from '../screens/StatsScreen';
import AddIncomeScreen from '../screens/AddIncomeScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import React, {useContext, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthContext} from '../provider/AuthProvider';
import {DataContext} from '../provider/DataProvider';
import LottieView from 'lottie-react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const FormStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="primaryHome">
      <Stack.Screen name="primaryHome" component={HomeScreen} />
      <Stack.Screen name="AddIncome" component={AddIncomeScreen} />
      <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
    </Stack.Navigator>
  );
};
const AppStack = () => {
  const {user} = useContext(AuthContext);
  const {readData, isLoading, readIncome} = useContext(DataContext);
  useEffect(() => {
    readData(user.uid);
    readIncome(user.uid); //////////////////////////////////////////////////////////////////////////////////////////
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return isLoading ? (
    <LottieView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{backgroundColor: 'white'}}
      source={require('../assets/graph_anim.json')}
      autoPlay
      loop
    />
  ) : (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={FormStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon2
                name="home"
                size={25}
                color={focused ? '#009387' : '#748c94'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Stats"
        component={StatsScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon2
                name="line-graph"
                size={25}
                color={focused ? '#009387' : '#748c94'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon3
                name="person"
                size={25}
                color={focused ? '#009387' : '#748c94'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default AppStack;
