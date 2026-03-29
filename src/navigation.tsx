import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./navigation/AppNavigator";

function Navigation() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default Navigation;
