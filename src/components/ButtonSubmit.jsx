import { func, string } from 'prop-types';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function ButtonSubmit(props) {

    const {label, onPress} = props;

    return(
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <Text style={styles.buttonLabel}>{label}</Text>
        </TouchableOpacity>
    );
}

ButtonSubmit.prototype = {
    label: string.isRequired,
    onPress: func,
};

ButtonSubmit.defaultTypes={
    onPress: null,
};
const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#6699FF',
        borderRadius:4,
        alignSelf: 'flex-start',
        marginBottom:24,
    },

    buttonLabel: {
        fontSize:16,
        lineHeight:32,
        paddingHorizontal:32,
        paddingVertical:8,
        color:'#ffffff',
    },
});
