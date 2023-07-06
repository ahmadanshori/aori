import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, SIZES} from '@/constants';
import {Text} from '@/components/Atoms';

const Button = ({
  title,
  style = {},
  onPress,
  disable = false,
  backgroundColor,
}) => {
  const containerStyles = [
    [styles.button, disable ? styles.inactive : styles.active, style],
  ];
  if (backgroundColor) {
    containerStyles.push({backgroundColor});
  }
  return (
    <TouchableOpacity
      activeOpacity={disable ? 1 : SIZES.opacity}
      style={containerStyles}
      onPress={disable ? () => {} : onPress}>
      <View style={styles.wrapper}>
        <Text style={{color: disable ? COLORS.gray : COLORS.white}} bold>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 6,
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: COLORS.primary,
  },
  inactive: {backgroundColor: COLORS.lightGray},
  wrapper: {flexDirection: 'row', alignItems: 'center'},
});

export default Button;
