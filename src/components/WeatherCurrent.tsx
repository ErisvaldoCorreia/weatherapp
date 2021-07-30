import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import LocationService from '../services/LocationService';
import Button from './Button';

const WeatherCurrent = () => {
    const navigation = useNavigation();

    const handleFetchLocation = useCallback(async () => {
        const position = await LocationService.getCurrentPosition();
        navigation.navigate('Weather', position);
    },[navigation]);

    return <Button 
            testID={'weather-current'}
            label='Weather at my position!'
            onPress={handleFetchLocation}
        />;
};

export default WeatherCurrent;
