import React from 'react';
import { View } from 'react-native';
import { render } from '@testing-library/react-native';

import { AppRouter } from './pages';
import App from './App';

jest.mock('./pages/AppRouter/AppRouter', () => jest.fn());

describe('Testing App Page', () => {
    it('Should render routes', () => {
        (AppRouter as jest.Mock).mockReturnValueOnce(
            <View testID='mock-routes' />
        );

        const wrapper = render(<App />);
        wrapper.getByTestId('mock-routes');
    });
});
