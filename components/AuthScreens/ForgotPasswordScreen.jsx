
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
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
    <View style={styles.container}>

      <Text style={styles.title}>Reset your password</Text>

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

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: globalStyles.app.backgroundColor
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '100%',
    maxWidth: 400,
    // height: 100
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: globalStyles.app.title.color,
    margin: 10,
  },
  
  text: {
    color: 'gray',
    marginVertical: 10
  },

  link: {
    color: '#FDB075'
  }
});


export default ForgotPasswordScreen;