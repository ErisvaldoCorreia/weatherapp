import React from 'react';
import { render } from '@testing-library/react-native';
import { HomeScreen } from '../../pages';

describe('Testing HomeScreen', () => {
    it('Should be render correctly from HomeScreen Page', () => {
        const wrapper = render(<HomeScreen />);
        expect(wrapper.getByTestId('home-screen')).toBeTruthy();
    });
});
