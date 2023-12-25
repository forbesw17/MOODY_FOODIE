import React from "react";
import { Image, StyleSheet } from "react-native";

//Global Styles
import { globalStyles } from "./GlobalStyles";

//Icon Images
import HomeIcon from "../assets/icons/home.png";
import QuizIcon from "../assets/icons/quiz.png";
import ProfileIcon from "../assets/icons/profile.png";
import SettingsIcon from "../assets/icons/setting.png";

import HomeActiveIcon from "../assets/icons/homeActive.png";
import QuizActiveIcon from "../assets/icons/quizActive.png";
import ProfileActiveIcon from "../assets/icons/profileActive.png";
import SettingsActiveIcon from "../assets/icons/settingActive.png";

//Navigators
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
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: globalStyles.navigation.bottomTabContainer,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabelStyle: {
            color: "white",
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? HomeActiveIcon : HomeIcon}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Quiz"
        component={QuizScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? QuizActiveIcon : QuizIcon}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? ProfileActiveIcon : ProfileIcon}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? SettingsActiveIcon : SettingsIcon}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
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
