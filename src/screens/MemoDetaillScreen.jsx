import { shape, string } from 'prop-types';
import React , {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import firebase from 'firebase';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';
import { dateToString } from '../utils';

export default function MemoDetailScreen(props){
    const {navigation, route} = props;
    const { id } = route.params;
    console.log(id);
    const [memo,setMemo] = useState(null);

    useEffect(() => {
        const {currentUser} = firebase.auth();
        let unsubscribe = () => {};
        if (currentUser) {
            const db = firebase.firestore();
        const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
        unsubscribe = ref.onSnapshot((doc) => {
            console.log(doc.id, doc.data());
            const data = doc.data();
            setMemo({
                id: doc.id,
                bodyText:data.bodyText,
                time: data.time.toDate(),
            });
        });
        }
        return unsubscribe;
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.memoheader}>
                <Text style={styles.memotitle} numberOfLines={1}>{memo && memo.bodyText}</Text>
                <Text style={styles.memodate}>{memo && dateToString(memo.time)}</Text>
            </View>
            <ScrollView style={styles.memobody}>
                <View style={styles.memotext}>
                    <Text>{memo && memo.bodyText}</Text>
                </View>
            </ScrollView>
            <CircleButton 
            style={{top:60, bottom: 'auto'}} 
            name="edit-2" 
            onPress={() => {navigation.navigate('Memo Edit', {id: memo.id, bodyText:memo.bodyText})}}
            />
        </View>
    );
}

MemoDetailScreen.propTypes ={
    route: shape({
        params: shape({id: string}),
    }).isRequired,
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#ffffff',
    },

    memoheader: {
        height:96,
        backgroundColor:'#6699FF',
        justifyContent: 'center',
        paddingVertical:24,
        paddingHorizontal:19,

    },
    memotitle: {
        color: '#ffffff',
        fontSize:28,
        lineHeight:32,
        fontWeight:'bold',
    },
    memodate: {
        color: '#ffffff',
        fontSize: 12,
        lineHeight: 16,
    },
    memobody: {
        paddingVertical:32,
        paddingHorizontal:27,
    },
    memotext: {
        fontSize:16,
        lineHeight:16,
    },
});
