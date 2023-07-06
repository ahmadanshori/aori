import React from 'react';
import {StyleSheet, Text as DefaultText} from 'react-native';
import {COLORS} from '@/constants';

const Text = ({
  children,
  bold,
  color = COLORS.black,
  fontSize = 14,
  numberOfLines,
  style = {},
}) => {
  const textStyles = [
    {
      ...styles.text,
      fontFamily: bold ? 'Muli-Bold' : 'Muli-Regular',
      fontSize: fontSize,
      color: color,
      ...style,
    },
  ];

  return (
    <DefaultText style={textStyles} numberOfLines={numberOfLines}>
      {children}
    </DefaultText>
  );
};

const styles = StyleSheet.create({
  text: {color: COLORS.black, fontSize: 14},
});

export default Text;
