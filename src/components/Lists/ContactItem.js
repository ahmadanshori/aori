import React, {useMemo} from 'react';
import {
  StyleSheet,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import {Text} from '@/components/Atoms';
import {COLORS} from '@/constants';
import {SIZES} from '../../constants';

const ContactItem = ({item, onEdit, onDelete}) => {
  const validateImage = useMemo(() => {
    const chekUrl = item.photo.includes('http');
    if (chekUrl) {
      return item.photo;
    } else {
      return false;
    }
  }, [item?.photo]);

  return (
    <View style={styles.card}>
      <View style={styles.between}>
        <View style={[styles.row, {flex: 1}]}>
          {validateImage ? (
            <Image source={{uri: validateImage}} style={styles.img} />
          ) : (
            <Icon
              testID="default-image"
              name="account-circle"
              size={45}
              color={'#CECECE'}
            />
          )}
          <View style={styles.titleWrap}>
            <Text bold color={COLORS.secondary}>
              {item?.firstName} {item?.lastName}
            </Text>
            <Text size={12}>Umur: {item?.age}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.delete}
            onPress={() => onEdit(item?.id)}
            testID="edit-button">
            <Feather name="edit" size={20} color={COLORS.primary} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.delete}
            onPress={onDelete}
            testID="delete-button">
            <Icon name="delete-outline" size={25} color={COLORS.red} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  card: {
    marginBottom: 8,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 4,
    backgroundColor: COLORS.white,
    ...SIZES.shadow,
  },
  between: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleWrap: {marginLeft: 16, flex: 1},
  img: {height: 45, width: 45, borderRadius: 45, backgroundColor: 'white'},
  delete: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
});
