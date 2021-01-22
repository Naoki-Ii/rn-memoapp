import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen(props){
    const {navigation} = props;
    return(
        <View style={styles.container}>
            <View style={styles.memoheader}>
                <Text style={styles.memotitle}>買い物リスト</Text>
                <Text style={styles.memodate}>2020/12/24 00:00:00</Text>
            </View>
            <ScrollView style={styles.memobody}>
                <View style={styles.memotext}>
                    <Text>
                    こちらに本文が入ります
                    </Text>
                </View>
            </ScrollView>
            <CircleButton 
            style={{top:60, bottom: 'auto'}} 
            name="edit-2" 
            onPress={() => {navigation.navigate('Memo Edit'); }}
            />
        </View>
    );
}

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
