import React from 'react';
import { View, ViewProps } from 'react-native';

interface PropsButton extends ViewProps {
    label: string;
    onPress: () => void;
    loading?: boolean;
}

const Button = ({label, onPress, loading}: PropsButton) => {
    return <View />
};

export default Button;
