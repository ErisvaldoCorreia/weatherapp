import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LocationService from '../services/LocationService';
import Button from './Button';

const WeatherCurrent = () => {
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const handleFetchLocation = useCallback(async () => {
        setLoading(true);
        try {
            const position = await LocationService.getCurrentPosition();
            navigation.navigate('Weather', position);
        } catch (error) {}
        
        setLoading(false);
    },[navigation]);

    return <Button 
            testID={'weather-current'}
            label='Weather at my position!'
            onPress={handleFetchLocation}
            loading={loading}
        />;
};

export default WeatherCurrent;
