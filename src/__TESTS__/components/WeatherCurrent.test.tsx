import React from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';

import WeatherCurrent from '../../components/WeatherCurrent';
import LocationService from '../../services/LocationService';

jest.mock('@react-navigation/native', () => {
    return {
        ...jest.requireActual('@react-navigation/native'),
        useNavigation: jest.fn().mockReturnValue({navigate: jest.fn()}),
    }
})

describe('Testing WeatherCurrent component', () => {
    it('Should render correclty', () => {
        const wrapper = render(<WeatherCurrent />);
        wrapper.getByTestId('weather-current');
    });

    it('Should render label on button', () => {
        const wrapper = render(<WeatherCurrent />);
        wrapper.getByText('Weather at my position!');
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

    describe('Loader section on button', () => {

        it('should be rendenring when position is being fetched', async () => {
            let mockResolve = (position: {
                latitude: number; 
                longitude: number;
            }) => void

            jest.spyOn(LocationService, 'getCurrentPosition').mockImplementationOnce(
                //@ts-ignore
                () => new Promise((resolve) => { mockResolve = resolve;}),
            );

            const wrapper = render(<WeatherCurrent />);
            const button = wrapper.getByTestId('weather-current');
            fireEvent.press(button);

            await expect(wrapper.findByTestId('button-loading')).resolves.toBeDefined();
            await act(async () => {
                await mockResolve({latitude: 0, longitude: 0});
            })
        });

        it('should not be rendered when position has been fetched', () => {
            const wrapper = render(<WeatherCurrent />);
            const button = wrapper.getByTestId('weather-current');
            fireEvent.press(button);

            return expect(wrapper.findByTestId('button-loading')).rejects.toThrow();
        });

        it('should not be rendered when position has been failed', () => {
            jest.spyOn(LocationService, 'getCurrentPosition').mockRejectedValueOnce(new Error(''));
            
            const wrapper = render(<WeatherCurrent />);
            const button = wrapper.getByTestId('weather-current');
            fireEvent.press(button);

            return expect(wrapper.findByTestId('button-loading')).rejects.toThrow();
        });

    })

});
