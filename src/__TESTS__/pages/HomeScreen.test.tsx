import React from 'react';
import { render } from '@testing-library/react-native';
import MockDate from 'mockdate';

import HomeScreen from '../../pages/HomeScreen';

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
});
