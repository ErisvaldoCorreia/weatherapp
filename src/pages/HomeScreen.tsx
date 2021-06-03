import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../utils/constants';

const HomeScreen = () => {
    return (
        <LinearGradient 
            colors={[Colors.LIGHT_GREY, Colors.DARKER_GREY]} 
            testID={'home-screen'} 
            style={styles.container} 
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 40,
        alignContent: 'space-between',
        justifyContent: 'space-evenly',
    }
})

export default HomeScreen;
