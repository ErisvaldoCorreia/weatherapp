import React from 'react';
import { render } from '@testing-library/react-native';

import WeatherScreen from './WeatherScreen';

describe('Testing WeatherScreen', () => {
    it('Should render correctly', () => {
        const wrapper = render(<WeatherScreen />);
        wrapper.getByTestId('weather-screen');
    });
});
