import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {SIZES, COLORS} from '@/constants';
import {Text} from '@/components/Atoms';

const ErrorNetwork = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title} bold>
          No Internet Access
        </Text>
        <Text textAlign={'center'}>
          Silakan periksa koneksi dan data Anda, terima kasih!
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
          activeOpacity={SIZES.opacity}>
          <Text bold color={COLORS.primary}>
            Refresh
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1000,
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    width: '80%',
    paddingTop: 24,
    paddingHorizontal: 24,
    borderRadius: 16,
  },
  image: {
    height: 150,
    width: 150,
  },
  title: {marginVertical: 8},
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    paddingBottom: 16,
  },
});

export default ErrorNetwork;
