import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {COLORS} from '@/constants';

const Input = (props, {err = false}) => {
  const [color, setColor] = useState(COLORS.border);
  const handleFocus = () => setColor(COLORS.primary);
  const handleBlur = () => setColor(COLORS.border);

  return (
    <View style={[styles.wrapper, err ? styles.error : {borderColor: color}]}>
      <TextInput
        style={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    paddingHorizontal: 14,
    borderRadius: 4,
    height: 48,
  },
  error: {borderColor: COLORS.red},
  input: {
    flex: 1,
    fontFamily: 'Muli-Regular',
  },
});

export default Input;
