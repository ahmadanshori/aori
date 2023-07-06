import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '@/constants';

const AddButton = ({onPress}) => {
  return (
    <TouchableOpacity
      testID="AddButton"
      style={[styles.btn, {backgroundColor: COLORS.primary}]}
      activeOpacity={1}
      onPress={onPress}>
      <Icon name="plus" size={35} color={COLORS.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    padding: 12,
    borderRadius: 100,
  },
});

export default AddButton;
