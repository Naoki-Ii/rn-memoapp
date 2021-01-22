import { string } from 'prop-types';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ButtonSubmit(props) {

    const {label} = props;

    return(
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonLabel}>{label}</Text>
        </View>
    );
}

ButtonSubmit.prototype = {
    label: string.isRequired,
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
