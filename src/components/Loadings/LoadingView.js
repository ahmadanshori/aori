import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {COLORS, SIZES} from '@/constants';

export default () => {
  return (
    <View
      style={{
        height: SIZES.height,
        position: 'absolute',
        zIndex: 999,
        width: SIZES.width,
        backgroundColor: COLORS.shadowWhite,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator
        testID="loading-indicator"
        size="large"
        color={COLORS.black}
      />
    </View>
  );
};
