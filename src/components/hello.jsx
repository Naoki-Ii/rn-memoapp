import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {string, bool, shape} from 'prop-types'

function Hello(props){

    /* const {children} = props; (分割代入の書き方)*/
    const children = props.children;
    const bang = props.bang;
    const style = props.style;

    return(
        <View>
            <Text style={[styles.text,style]}>
                {`Hello ${children}${bang ? '!': ''}`}
            </Text>
        </View>
    );
}

Hello.prototype = {
    children:string.isRequired,
    bang:bool,
    style:shape(),
};

Hello.defaultProps = {
    bang: false,
    style: null,
};

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        backgroundColor: 'blue',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 16,
    }
});
export default Hello;
