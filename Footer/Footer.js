import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screen/HomeScreen';
import CalendarScreen from '../Screen/CalendarScreen';
import LibraryScreen from '../Screen/LibraryScreen';
import MyPageScreen from '../Screen/MyPageScreen';

const home = 'HOME';
const calendar = 'CALENDAR';
const library = 'LIBRARY';
const mypage = 'MYPAGE';

const Tab = createBottomTabNavigator();

const footer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={home}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let icon;
            let rn = route.name;

            if (rn === home) {
              icon = focused ? 'home-sharp' : 'home-outline';
            } else if (rn === calendar) {
              icon = focused ? 'calendar-sharp' : 'calendar-outline';
            } else if (rn === library) {
              icon = focused ? 'barbell-sharp' : 'barbell-outline';
            } else if (rn === mypage) {
              icon = focused ? 'person-sharp' : 'person-outline';
            }
            return <Icon name={icon} size={23} />;
          },
        })}
        tabBarOptions={{
          headerShown: false,
          activeTintColor: 'black',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 5, fontSize: 8 },
          style: { padding: 5, height: 50 },
          backgroundColor: 'white',
        }}
      >
        <Tab.Screen
          name={home}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={calendar}
          component={CalendarScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={library}
          component={LibraryScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={mypage}
          component={MyPageScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default footer;
