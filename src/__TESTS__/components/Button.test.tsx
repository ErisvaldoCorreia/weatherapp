import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import Button from '../../components/Button';

describe('Testing Button Component', () => {

    it('Should render correctly', () => {
        const wrapper = render(<Button label='' onPress={jest.fn()} />);
        wrapper.getByTestId('button');
    })

    it('Should render correctly', () => {
        const wrapper = render(<Button label='' onPress={jest.fn()} loading />);
        wrapper.getByTestId('button-loading');
    })

    it('Should call given onPress when clicked', () => {
        const mockPress = jest.fn();
        const wrapper = render(<Button label='' onPress={mockPress} />);
        const button = wrapper.getByTestId('button');

        fireEvent.press(button);
        expect(mockPress).toHaveBeenCalled();
    })

    it('Should render label', () => {
        const wrapper = render(<Button label='mock-label' onPress={jest.fn()} />);
        wrapper.getByText('mock-label');
    })

    it('Should accept custom view Props', () => {
        const wrapper = render(<Button label='' onPress={jest.fn()} testID='mock-test-id' />);
        wrapper.getByTestId('mock-test-id');
    })

});
