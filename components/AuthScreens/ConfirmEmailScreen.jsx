
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
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
    <View style={styles.container}>

      <Text style={styles.title}>Confirm Email</Text>

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

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: globalStyles.app.backgroundColor
  },
  container: {
    backgroundColor: globalStyles.app.backgroundColor,
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


export default ConfirmEmailScreen;