import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native'


const SettingsScreen = () => {

    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <Text>Settings</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexGrow: 1,
        // padding: 0,
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#003',
        backgroundColor: 'white',
        minWidth: '100%',
        // minHeight: '100%',
        // height: 'fit-content'
    }

});

export default SettingsScreen;