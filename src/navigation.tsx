import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import AppNavigator from "./navigation/AppNavigator";

function Navigation() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default Navigation;
