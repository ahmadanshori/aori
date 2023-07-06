import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {SIZES, COLORS} from '@/constants';
import {Text} from '@/components/Atoms';

const ErrorServer = ({onPress}) => (
  <View style={styles.container}>
    <View style={styles.box}>
      {/* <Image
        resizeMode="contain"
        source={require("../../assets/images/server.png")}
        style={styles.image}
      /> */}
      <Text style={styles.title} bold>
        Ada yang salah…
      </Text>
      <Text textAlign="center">
        Kami sedang berusaha memperbaiki masalah tersebut. Silakan coba lagi.
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
    height: 200,
    width: 200,
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

export default ErrorServer;
