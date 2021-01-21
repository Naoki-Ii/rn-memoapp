import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MemoList() {
  return(
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
  );
}

const styles = StyleSheet.create({
  
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
});
