import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function MemoList() {
  const navigation = useNavigation();
  return(
    <View>
        <TouchableOpacity 
          style={styles.memoListItem}
          onPress={() => { navigation.navigate('Memo Detail')}}
          >
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemTime}>2020/12/24 00:00:00</Text>
          </View>
          <TouchableOpacity 
            onPress={() => {Alert.alert('Are you Sure?')}}
            style={styles.memoDelete}
          >
            <Feather name="x" size={16} color="#B0B0B0" />
          </TouchableOpacity>
        </TouchableOpacity>
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
  memoDelete: {
    padding: 8,
  },
});
