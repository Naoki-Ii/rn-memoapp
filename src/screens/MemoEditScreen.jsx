import React, {useState} from 'react';
import { View, StyleSheet,TextInput, KeyboardAvoidingView, Alert} from 'react-native';
import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';
import {shape, string} from 'prop-types';
import firebase from 'firebase';

export default function MemoEditScreen(props){
    const {navigation, route} = props;
    const {id, bodyText} = route.params;
    const [body, setBody] = useState(bodyText);

    function handlePress() {
        const {currentUser} = firebase.auth();
        if (currentUser) {
            const db = firebase.firestore();
            const ref = db.collection(`users/${currentUser}/memos`).doc(id);
            ref.set({
                bodyText: body,
                time: new Date(),
            })
            .then(() => {
                navigation.goback();
            })
            .catch((error) => {
                Alert.alert(error);
            });
        }

    }
    return(
        <KeyboardAvoidingView style={styles.container} behavior={'height'}>
            <View style={styles.inputContainer}>
                <TextInput 
                value={body}　
                multiline style={styles.input}
                onChangeText={(text) => {setBody(text); }}
                />
            </View>
            <CircleButton 
            name="check" 
            onPress={handlePress}
            />
        </KeyboardAvoidingView>
    );
}

MemoEditScreen.propTypes ={
    route: shape({
        params: shape({id: string, bodyText: string}),
    }).isRequired,
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    inputContainer: {
        paddingHorizontal:27,
        paddingVertical:32,
        flex:1,
    },

    input: {
        flex:1,
        textAlignVertical:'top',
        fontSize:16,
        lineHeight:24,
    },
});
