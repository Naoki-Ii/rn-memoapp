import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appberTitle}>Memo App</Text>
          <Text style={styles.appbarLight}>ログアウト</Text>
        </View>
      </View>
      <View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemTime}>2020/12/24 00:00:00</Text>
          </View>
          <View>
            <Text>✖︎</Text>
          </View>
        </View>
      </View>
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>＋</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
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

  memoListItem:{
    backgroundColor:'#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
  },

  memoListItemTitle: {
    fontSize:16,
    lineHeight:32,

  },
  memoListItemTime: {
    fontSize:12,
    lineHeight:16,
    color:'#848484',
  },

  circleButton: {
    backgroundColor: '#6699FF',
    width:64,
    height:64,
    borderRadius:32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset:{width:0,height:8},
    shadowOpacity: 0.25,
    shadowRadius:8,
  },

  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});
