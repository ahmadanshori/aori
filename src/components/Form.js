import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {Text} from '@/components/Atoms';
import {COLORS} from '@/constants';

const Form = ({style, error, title, ...props}) => {
  return (
    <View style={styles.inputWrp}>
      <Text bold>{title}</Text>
      <TextInput
        {...props}
        placeholderTextColor={COLORS.black}
        style={[
          styles.input,
          {backgroundColor: COLORS.shadowWhite},
          {...style},
        ]}
      />
      {error ? (
        <Text fontSize={12} color={COLORS.error} testID="Invalid input">
          {error}
        </Text>
      ) : null}
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  inputWrp: {
    marginBottom: 16,
  },
  input: {
    height: 45,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 8,
    borderWidth: 1,
    borderColor: COLORS.gray,
    color: COLORS.black,
  },
});
