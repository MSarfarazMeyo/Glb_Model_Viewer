import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens

import {Image, Text, View, StyleSheet} from 'react-native';

import MyScreen from '../Screens/MyScreen';
import BasicExample from '../Components/BasicExample';
import OpenGlb from '../Components/OpenGlb';
import BasicExample2 from '../Components/BasicExample2';
import OpenGlb2 from '../Components/OpenGlb2';

//Screen names
const homeName = 'Home';
const musicName = 'Music';
const MixList = 'Statistics';
const profileName = 'Profile';
const createName = 'Night';

const Tab = createBottomTabNavigator();
function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({route}) => ({
        tabBarLabel: () => {
          return null;
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;
          if (rn === homeName) {
            iconName = 'Home';
          } else if (rn === musicName) {
            iconName = 'Music';
          } else if (rn === createName) {
            iconName = 'Night';
          } else if (rn === MixList) {
            iconName = 'Statistics';
          } else if (rn === profileName) {
            iconName = 'Profile';
          }
          // You can return any component that you like here!
          return (
            // <Image source={iconName} style={{ height: 70, width: 70 }} />
            <View>
              {iconName === 'Home' ? (
                <View style={styles.iconContainer}>
                  <Text style={styles.iconText}>gltf 1</Text>
                </View>
              ) : iconName === 'Music' ? (
                <View style={styles.iconContainer}>
                  <Text style={styles.iconText}>GLB 1</Text>
                </View>
              ) : iconName === 'Night' ? (
                <View
                  style={{
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 50,
                  }}></View>
              ) : iconName === 'Statistics' ? (
                <View style={styles.iconContainer}>
                  <Text style={styles.iconText}>GLB 2</Text>
                </View>
              ) : (
                <View style={styles.iconContainer}>
                  <Text style={styles.iconText}>gltf 2</Text>
                </View>
              )}
            </View>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#774DCE',
        inactiveTintColor: 'grey',
        labelStyle: {paddingBottom: 10, fontSize: 10},
        style: {padding: 10, height: 70},
      }}>
      <Tab.Screen
        name={homeName}
        component={MyScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={musicName}
        component={OpenGlb}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={createName}
        component={MyScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={MixList}
        component={OpenGlb2}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={profileName}
        component={BasicExample}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigation;
const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 10,
    textAlign: 'center',
    color: '#774DCE',
  },
});
