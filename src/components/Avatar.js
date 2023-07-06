import React from 'react';
import {TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '@/constants';

const Avatar = ({data, onPress}) => {
  const validateImage = React.useMemo(() => {
    const chekUrl = data?.photo.includes('http');
    if (chekUrl) {
      return data?.photo;
    } else {
      return false;
    }
  }, [data?.photo]);

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        testID="avatar-touchable-opacity"
        activeOpacity={0.7}
        onPress={onPress}
        style={[styles.img, {backgroundColor: COLORS.shadowPrimary}]}>
        {validateImage ? (
          <Image
            testID="avatar-image"
            source={{uri: validateImage}}
            style={styles.img}
          />
        ) : (
          <View style={styles.row}>
            <Icon
              testID="avatar-camera-icon"
              name="camera"
              color={COLORS.primary}
              size={60}
            />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  img: {
    height: 160,
    width: 160,
    borderRadius: 160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.shadowPrimary,
  },
  row: {justifyContent: 'center', alignItems: 'center'},
});

export default Avatar;
