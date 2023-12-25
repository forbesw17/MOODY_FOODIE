
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//Global Styles
import { globalStyles } from '../GlobalStyles';

import CustomInput from '../UtilComponents/CustomInput';
import CustomButton from '../UtilComponents/CustomButton';

const ConfirmEmailScreen = () => {

  const navigation = useNavigation();

  const [code, setCode] = useState('');

  const onLoginPressed = () => {
    //auth users
    navigation.navigate('Login');
  }

  const onConfirmPressed = () => {
    navigation.navigate("AppTabs", {screen: "Home"});
    // navigation.navigate('Home');
  }

  const onResendPressed = () => {
    console.warn("Resend")
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={globalStyles.auth.scrollView}>
    <View style={globalStyles.auth.container}>

      <Text style={globalStyles.auth.title}>Confirm Email</Text>

      <CustomInput
        placeholder='Enter your confirmation code'
        value={code}
        setValue={setCode}
      />


      <CustomButton text="Confirm" onPress={onConfirmPressed}/>

      <CustomButton 
        text="Resend Code" 
        onPress={onResendPressed}
        type='SECONDARY'
      />

      <CustomButton 
        text="Back to login" 
        onPress={onLoginPressed}
        type='TERTIARY'
      />

    </View>
    </ScrollView>
  );
}


export default ConfirmEmailScreen;