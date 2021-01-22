import React from 'react';
import {View, Text, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native';
import AppBar from '../components/AppBar';
import ButtonSubmit from '../components/ButtonSubmit';

export default function SignUpScreen(props){
    const {navigation} = props;
    return(
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput style={styles.input} value="Email Address"/>
                <TextInput style={styles.input} value="Password"/>
                <ButtonSubmit 
                label='Submit'
                onPress={() => {
                    navigation.reset({
                        index:0,
                        routes:[{ name: 'Memo List'}],
                    });
                }}
                />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already registered?</Text>
                    <TouchableOpacity
                        onPress={() => {navigation.reset({
                            index:0,
                            routes: [{name:'Log In'}],
                        });
                    }}
                    >
                        <Text style={styles.footerLink}>Log In!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F0F4F8',
    },
    inner: {
        paddingHorizontal: 27,
        paddingVertical: 24,
    },
    title: {
        fontSize:24,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    input: {
        fontSize:16,
        height: 48,
        borderColor: '#dddddd',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 8,
        marginBottom:16,

    },

    footer: {
        flexDirection: 'row',
    },
    footerText: {
        fontSize:14,
        lineHeight: 24,
        marginRight:8,
    },
    footerLink: {
        fontSize:14,
        lineHeight:24,
        color:'#6699FF',
    },
});
