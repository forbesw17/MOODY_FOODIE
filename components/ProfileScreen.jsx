
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native'

//Global Styles
import { globalStyles } from './GlobalStyles';

import ProfileData from './ProfileData';

const ProfileScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>

            <ProfileData />        

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        alignItems: "center",
        minWidth: "100%",
        backgroundColor: globalStyles.app.backgroundColor,
      },
      title: {
        marginLeft: 20,
        alignSelf: "flex-start",
        marginBottom: 15,
        color: globalStyles.app.title.color,
        fontSize: globalStyles.app.title.fontSize,
        fontWeight: 'bold'
      },

});

export default ProfileScreen;