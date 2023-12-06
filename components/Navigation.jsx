import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Auth Component Screens
import LoginScreen from "./AuthScreens/LoginScreen";
import SignUpScreen from "./AuthScreens/SignUpScreen";
import ConfirmEmailScreen from "./AuthScreens/ConfirmEmailScreen";
import ForgotPasswordScreen from "./AuthScreens/ForgotPasswordScreen";
import NewPasswordScreen from "./AuthScreens/NewPasswordScreen";

//App Component Screens
import HomeScreen from "./HomeScreen";
import QuizScreen from "./QuizScreen";
import SettingsScreen from "./SettingsScreen";
import ProfileScreen from "./ProfileScreen";

//Context Provider
import RestaurantProvider from "./RestaurantProvider";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
  </Stack.Navigator>
);

const AppTabs = () => (
  <RestaurantProvider>
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Quiz" component={QuizScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  </RestaurantProvider>
);

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen
          name="AppTabs"
          component={AppTabs}
          options={{ gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
