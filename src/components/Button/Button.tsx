import React from 'react';
import { 
    TouchableOpacity, 
    Text, 
    ViewProps, 
    StyleSheet, 
    ActivityIndicator 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../utils/constants';

interface PropsButton extends ViewProps {
    label: string;
    onPress: () => void;
    loading?: boolean;
};

const Button = ({
    label, 
    onPress, 
    loading,
    style,
    ...others
}: PropsButton) => {
    return (
        <TouchableOpacity onPress={onPress} testID='button'>
            <LinearGradient
                {...others}
                colors={[Colors.BUTTON_GREY, Colors.BUTTON_DARK_GREY]}
                style={[styles.container, style]}>
                    {loading 
                        ? (
                            <ActivityIndicator
                                testID='button-loading'
                                size={24}
                                color={Colors.WHITE}
                            />
                        ) : (
                            <Text style={styles.label}>
                                {label}
                            </Text>
                        )
                    }
                </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 19,
        color: Colors.WHITE,
    }
})

export default Button;
