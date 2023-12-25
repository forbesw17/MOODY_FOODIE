
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//Global Styles
import { globalStyles } from '../GlobalStyles';

import CustomInput from '../UtilComponents/CustomInput';
import CustomButton from '../UtilComponents/CustomButton';

const ForgotPasswordScreen = () => {

  const navigation = useNavigation();

  const [username, setUsername] = useState('');

  const onLoginPressed = () => {
    navigation.navigate('Login');
  }

  const onSendPressed = () => {
    navigation.navigate('NewPassword');
  }

  const onResendPressed = () => {
    console.warn("Resend")
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={globalStyles.auth.scrollView}>
    <View style={globalStyles.auth.container}>

      <Text style={globalStyles.auth.title}>Reset your password</Text>

      <CustomInput
        placeholder='Username'
        value={username}
        setValue={setUsername}
      />


      <CustomButton text="Send" onPress={onSendPressed}/>

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

export default ForgotPasswordScreen;