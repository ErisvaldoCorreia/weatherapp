import React, { useEffect } from 'react';
import { View } from 'react-native';
import { render, waitFor } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';

import AppRouter from '../../pages/AppRouter';
import HomeScreen from '../../pages/HomeScreen';
import WeatherScreen from '../../pages/WeatherScreen';

jest.mock('../../pages/HomeScreen', () => jest.fn());
jest.mock('../../pages/WeatherScreen', () => jest.fn());

describe('Testing AppRouter Screen', () => {

    it('Should be render HomeScreen by default', async () => {
        (HomeScreen as jest.Mock).mockReturnValueOnce(
            <View testID='mock-home-screen' />
        );

        const wrapper = render(<AppRouter />);
        await waitFor(() => {
            wrapper.getByTestId('mock-home-screen');
        })
    });

    it('Should render WeatherScreen on "weather" route', async () => {
        (HomeScreen as jest.Mock).mockImplementationOnce(() => {
            const navigation = useNavigation();

            useEffect(() => {
                navigation.navigate('Weather');
            }, [navigation]);

            return null;
        });

        (WeatherScreen as jest.Mock).mockReturnValueOnce(
            <View testID='mock-weather-screen' />
        );
        const wrapper = render(<AppRouter />);
        await waitFor(() => {
            wrapper.getByTestId('mock-weather-screen');
        })
    })

});
