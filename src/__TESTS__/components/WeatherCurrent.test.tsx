import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';

import WeatherCurrent from '../../components/WeatherCurrent';

jest.mock('@react-navigation/native', () => {
    return {
        ...jest.requireActual('@react-navigation/native'),
        useNavigation: jest.fn(),
    }
})

describe('Testing WeatherCurrent component', () => {
    it('Should render correclty', () => {
        const wrapper = render(<WeatherCurrent />);
        wrapper.getByTestId('weather-current');
    });

    it('Should navigate to weather screen with location', async () => {
        const mockNavigate = jest.fn();
        (useNavigation as jest.Mock).mockReturnValueOnce(
            { navigate: mockNavigate }
        );

        const wrapper = render(<WeatherCurrent />);
        const button = wrapper.getByTestId('weather-current');
        fireEvent.press(button);

        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith('Weather', {
                latitude: 0,
                longitude: 0,
            });
        });
    });

});
