
import React from 'react';
import { View, Text } from 'react-native'

//Global Styles
import { globalStyles } from './GlobalStyles';

import ProfileData from './ProfileData';

const ProfileScreen = () => {

    return (
        <View style={globalStyles.screen.container}>
            <Text style={globalStyles.screen.title}>Profile</Text>

            <ProfileData />        

        </View>
    );
};

export default ProfileScreen;