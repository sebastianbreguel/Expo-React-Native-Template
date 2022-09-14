import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Home from "../views/Home";

const AppStack = createStackNavigator();

function AppNavigator() {
  return (
    <AppStack.Navigator
      initialRouteName="About"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  );
}

export default AppNavigator;
