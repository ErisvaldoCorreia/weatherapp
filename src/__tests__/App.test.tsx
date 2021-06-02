import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';
import addingNumbers from '../utils/PureFunctions';

describe('Testing App', () => {
    it('First test in course - should return the sum of numbers', () => {
        expect(addingNumbers(2,2)).toBe(4);
    });

    //TODO: Reimplementar ao final do projeto
    // it('Should match with snapshot of the screen App', () => {
    //     const result = render(<App />).toJSON();
    //     expect(result).toMatchSnapshot();
    // });

    it('Should be found a view with testId', () => {
        const result = render(<App />);
        expect(result.getByTestId('app')).toBeTruthy();
    });
});
