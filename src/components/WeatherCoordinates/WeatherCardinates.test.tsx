import React from 'react';
import { render } from '@testing-library/react-native';

import WeatherCoordinates from './WeatherCoordinates';

describe('Testing WeatherCurrent component', () => {
    it('Should render correclty', () => {
        const wrapper = render(<WeatherCoordinates />);
        wrapper.getByTestId('weather-cardinates');
    });
});