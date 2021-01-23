import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Alert} from 'react-native';
import AppBar from '../components/AppBar';
import ButtonSubmit from '../components/ButtonSubmit';
import firebase from 'firebase';

export default function LogInScreen(props){
    const {navigation} = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                navigation.reset({
                    index:0,
                    routes:[{name : 'Memo List'}],
                });
            }
        });
        return unsubscribe;
    }, []);

    function handPress() {
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then((userCredencial) => {
                const {user} = userCredencial;
                console.log(user.uid);
                navigation.reset({
                    index:0,
                    routes:[{name : 'Memo List'}],
                });
        })
        .catch((error) => {
            Alert.alert(error.code);
        });
            
    }
    return(
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Log In</Text>
                <TextInput style={styles.input} 
                autoCapitalize="none" 
                keyboardType="email-address" 
                textContentType="emailAddress" 
                placeholder="Email Adress" 
                value={email} 
                onChangeText={(text) => {setEmail(text); }}
                />
                <TextInput style={styles.input} 
                autoCapitalize="none" 
                secureTextEntry 
                placeholder="Password" 
                textContentType="password" 
                value={password} 
                onChangeText={(text) => {setPassword(text); }}
                />
                <ButtonSubmit 
                label='Submit'
                onPress={handPress}
                />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registers?</Text>
                    <TouchableOpacity
                        onPress={() => {navigation.reset({
                            index:0,
                            routes: [{name:'Sign Up'}],
                        });
                    }}
                    >
                        <Text style={styles.footerLink}>Sign Up Here!</Text>
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
