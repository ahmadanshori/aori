import React from 'react';
import {View, TouchableOpacity, Platform, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS, SIZES} from '@/constants';
import {Text} from '@/components/Atoms';

const Header = ({title, backgroundColor, white, backPress, size = 16}) => {
  const navigation = useNavigation();
  const containerStyles = [styles.body];
  if (backgroundColor) {
    containerStyles.push({backgroundColor});
  }
  const backHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={containerStyles}>
      <View style={styles.wrapper}>
        <TouchableOpacity
          testID="back-button"
          style={styles.button}
          onPress={backPress ? backPress : backHandler}
          activeOpacity={SIZES.opacity}>
          <Icon
            name={Platform.OS === 'ios' ? 'left' : 'arrowleft'}
            size={20}
            color={white ? COLORS.white : COLORS.black}
          />
        </TouchableOpacity>
        <Text
          testID="Test Header"
          style={{
            color: white ? COLORS.white : COLORS.black,
            flex: 1,
            textAlign: 'center',
          }}
          bold
          size={size}
          numberOfLines={2}>
          {title}
        </Text>
        <View style={styles.empty} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: COLORS.white,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '17%',
  },
  empty: {width: '17%', height: 20},
});

export default Header;
