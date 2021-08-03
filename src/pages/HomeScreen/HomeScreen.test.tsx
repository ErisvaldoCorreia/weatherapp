import React from 'react';
import { View } from 'react-native';
import { render } from '@testing-library/react-native';
import MockDate from 'mockdate';

import HomeScreen from '../../pages/HomeScreen';
import WeatherCurrent from '../../components/WeatherCurrent';
import WeatherCoordinates from '../../components/WeatherCoordinates';


// Para implementar o retorno visual dos componentes
// na tela HomeScreen foi utilizado o processo de mock 
// de forma que tenhamos o efeito de ShallowRenderer 
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
        
        // Usamos a biblioteca MockDate instanciando uma data fixa antes
        // de cada teste, e resetamos o valor de data fixada após cada um,
        // assim conseguindo validar resultados em testes com datas.
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

    describe('Testing Components Section', () => {
        it('Should contain a section to get a current weather', () => {
            
            // Instancia o componente como um mock retornando um valor
            // especifico para a camada de testes de visão.
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

            // Instancia o componente como um mock retornando um valor
            // especifico para a camada de testes de visão.
            (WeatherCoordinates as jest.Mock).mockReturnValue(
                <View testID="mock-weather-coordinates" />
            );

            const wrapper = render(<HomeScreen />);
            wrapper.getByTestId('mock-weather-coordinates');
        });
    });
    
});
