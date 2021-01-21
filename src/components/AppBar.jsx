import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function AppBar(){
    return(
        <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appberTitle}>Memo App</Text>
          <Text style={styles.appbarLight}>ログアウト</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    appbar: {
        width:'100%',
        height: 104,
        backgroundColor: '#6699FF',
        justifyContent: 'flex-end',
    
      },
      appbarInner: {
        alignItems: 'center',
      },
      appbarLight: {
        position: 'absolute',
        right:19,
        bottom:16,
        color:'rgba(255,255,255,0.8)',
      },
      appberTitle: {
        marginBottom:8,
        fontSize:22,
        lineHeight:32,
        color:'#ffffff',
        fontWeight: 'bold',
      },    
});
