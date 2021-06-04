import React from 'react';
import { View } from 'react-native';
import { render } from '@testing-library/react-native';
import MockDate from 'mockdate';

import HomeScreen from '../../pages/HomeScreen';
import WeatherCurrent from '../../components/WeatherCurrent';
import WeatherCoordinates from '../../components/WeatherCoordinates';

jest.mock(
    '../../components/WeatherCoordinates', 
    () => jest.fn().mockReturnValue(null)
);
jest.mock(
    '../../components/WeatherCurrent', 
    () => jest.fn().mockReturnValue(null)
);

describe('Testing HomeScreen Page', () => {
    it('Should render correctly page', () => {
        const wrapper = render(<HomeScreen />);
        wrapper.getByTestId('home-screen');
    });

    describe('Testing Title Section - Mocked dates to test', () => {
        beforeEach(() => {
            MockDate.set('Jan 01, 2000')
        });

        afterEach(() => {
            MockDate.reset();
        });

        it('Should contain current date in section', () => {
            const wrapper = render(<HomeScreen />);
            wrapper.getByText('Jan 01, 2000');
        });

        it('Should contain current day in section', () => {
            const wrapper = render(<HomeScreen />);
            wrapper.getByText('Saturday');
        });
    });

    it('Should contain a section to get a current weather', () => {
        (WeatherCurrent as jest.Mock).mockReturnValue(
            <View testID="mock-weather-current" />
        );
        const wrapper = render(<HomeScreen />);
        wrapper.getByTestId('mock-weather-current');
    });

    it('Should contain a divider into section', () => {
        const wrapper = render(<HomeScreen />);
        wrapper.getByTestId('home-screen-divider');
    })

    it('Should contain a section to get a coordinates to weather', () => {
        (WeatherCoordinates as jest.Mock).mockReturnValue(
            <View testID="mock-weather-coordinates" />
        );
        const wrapper = render(<HomeScreen />);
        wrapper.getByTestId('mock-weather-coordinates');
    });
});
