import React from 'react';
import { render } from '@testing-library/react-native';

import WeatherCurrent from '../../components/WeatherCurrent';

describe('Testing WeatherCurrent component', () => {
    it('Should render correclty', () => {
        const wrapper = render(<WeatherCurrent />);
        wrapper.getByTestId('weather-current');
    });

    it('Should navigate to weather screen with location', () => {
        throw new Error('Test not implemented');
    })
});
