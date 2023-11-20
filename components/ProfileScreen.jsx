
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container} showsVerticalScrollIndicator={false}>
            <Button
            title="Logout"
            onPress={() => navigation.navigate("Auth", {screen: "Login"})}
            >
            Logout
            </Button>
            

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        
        borderRadius: 15,
        marginTop: 1,
        marginBottom: 20
    }

});

export default ProfileScreen;