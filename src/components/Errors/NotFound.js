import React from 'react';
import {View, StyleSheet} from 'react-native';
import {COLORS} from '@/constants';
import {Text} from '@/components/Atoms';

const NotFound = () => {
  return (
    <View style={styles.container}>
      <Text bold>Data Tidak ditemukan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotFound;
