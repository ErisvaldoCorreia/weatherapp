import React from 'react';
import { render } from '@testing-library/react-native';

import WeatherCardinates from '../../components/WeatherCardinates';

describe('Testing WeatherCurrent component', () => {
    it('Should render correclty', () => {
        const wrapper = render(<WeatherCardinates />);
        wrapper.getByTestId('weather-cardinates');
    });
});