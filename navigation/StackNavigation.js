import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from '../screens/SignIn'
import Booking from '../screens/Booking';
import Dashboard from '../screens/Dashboard';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {

    const headerOptions = () => ({
        headerStyle: {
          backgroundColor: "#4B8F8C",
        },
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      });


    return (
        <Stack.Navigator initialRouteName='SignIn' screenOptions={headerOptions}>
            <Stack.Screen
            name='SignIn'
            component={SignIn}
            options={{title: "Sign In"}}
            />
            <Stack.Screen
            name='Dashboard'
            component={Dashboard}
            options={{title: "Dashboard"}}
            />
            <Stack.Screen
            name='Booking'
            component={Booking}
            options={{title: "Booking"}}
            />
        </Stack.Navigator>
    );
};

export default StackNavigation;