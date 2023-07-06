import React, {useState, useRef, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TextInput,
  RefreshControl,
  Alert,
  Animated,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useIsFocused, useNavigation} from '@react-navigation/native';

// COMPONENT
import {ContactItem} from '@/components/Lists';
import {LoadingView} from '@/components/Loadings';
import {AddButton} from '@/components/Buttons';
import {Text} from '@/components/Atoms';
import {Container} from '@/components/Atoms';
import {NotFound} from '@/components/Errors';

// API
import {deleteContactAPI, getContactAPI} from '@/api/Contact';

// STORE
import {
  setLoading,
  setContact,
  setSearchContact,
  setRefreshLoading,
  setContactSelected,
  resetContactId,
} from '@/store/contactSlice';

import {COLORS} from '@/constants';

const headerHeight = 100;
let scrollValue = 0;
let headerVisible = true;
let focused = false;

const ContactScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const inputRef = useRef(null);
  const contact = useSelector(state => state.contact);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const animation = useRef(new Animated.Value(1)).current;
  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, headerHeight / 2 - 2],
  });
  const inputTranslateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [headerHeight / 4, 0],
  });
  const opacity = animation;
  const onScroll = e => {
    if (focused) return;
    const y = e.nativeEvent.contentOffset.y;
    if (y > scrollValue && headerVisible && y > headerHeight / 2) {
      Animated.spring(animation, {
        toValue: 0,
        useNativeDriver: true,
        bounciness: 0,
      }).start();
      headerVisible = false;
    }
    if (y < scrollValue && !headerVisible) {
      Animated.spring(animation, {
        toValue: 1,
        useNativeDriver: true,
        bounciness: 0,
      }).start();
      headerVisible = true;
    }
    scrollValue = y;
  };

  const getInitialData = async () => {
    try {
      const resContact = await getContactAPI();
      dispatch(setContact(resContact.data.data.reverse()));
      dispatch(setSearchContact(resContact.data.data.reverse()));
    } catch (err) {
    } finally {
      dispatch(setLoading(false));
      dispatch(setRefreshLoading(false));
    }
  };

  useEffect(() => {
    if (isFocused) getInitialData();
  }, [isFocused]);

  const handleSearch = val => {
    setText(val);
    const oldData = contact.data;
    const filterData = oldData.filter(item => {
      const fullname = item.firstName + item.lastName;
      return fullname.toLowerCase().includes(val.toLowerCase());
    });
    dispatch(setSearchContact(filterData));
  };

  const handleAddContact = useCallback(() => {
    dispatch(resetContactId());
    navigation.navigate('UpdateScreen', {title: 'Tambah'});
  }, []);

  const contactUpdate = useCallback(data => {
    dispatch(setContactSelected(data));
    navigation.navigate('UpdateScreen', {title: 'Ubah', id: data.id});
  }, []);

  const handleDeleteContact = useCallback(async id => {
    dispatch(setRefreshLoading(true));
    try {
      await deleteContactAPI(id);
      getInitialData();
    } catch (err) {
      Alert.alert('Error', 'An error occurred: ' + err);
    } finally {
      dispatch(setRefreshLoading(false));
    }
  }, []);

  const renderItem = ({item, index}) => (
    <ContactItem
      item={item}
      index={index}
      onEdit={() => contactUpdate(item)}
      onDelete={() => handleDeleteContact(item.id)}
    />
  );

  const refreshHandler = useCallback(async () => {
    dispatch(setLoading(true));
    getInitialData();
  }, []);

  return (
    <Container>
      {contact.isLoading ? (
        <LoadingView />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={contact.isRefresh}
              onRefresh={refreshHandler}
              title="Pull to refresh"
              tintColor={COLORS.secondary}
              titleColor={COLORS.secondary}
            />
          }
          data={text ? contact?.searchData : contact?.data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            ...styles.flatList,
            paddingTop: headerHeight + 10,
          }}
          onScroll={onScroll}
          ListEmptyComponent={<NotFound />}
        />
      )}
      <AddButton onPress={handleAddContact} />
      <View style={[styles.header]}>
        <Animated.View
          style={[styles.searchContainer, {transform: [{translateY}]}]}>
          <Animated.View
            style={[
              styles.inputContainer,
              {opacity, transform: [{translateY: inputTranslateY}]},
            ]}>
            <TextInput
              ref={inputRef}
              style={styles.input}
              placeholder="Cari Kontak.."
              placeholderTextColor={COLORS.black}
              value={text}
              onChangeText={handleSearch}
              onFocus={() => (focused = true)}
              onBlur={() => (focused = false)}
            />
          </Animated.View>
        </Animated.View>
        <Animated.View style={[styles.firstContainer]}>
          <Text
            fontSize={20}
            bold={true}
            color={COLORS.white}
            style={styles.name}>
            ORI
          </Text>
        </Animated.View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  flatList: {
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  header: {
    height: headerHeight / 2,
    width: '100%',
    position: 'absolute',
    zIndex: 1,
  },
  firstContainer: {
    height: headerHeight / 2,
    backgroundColor: COLORS.primary,
    elevation: 2,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  searchContainer: {
    height: headerHeight / 2,
    backgroundColor: COLORS.primary,
    width: '100%',
    position: 'absolute',
    elevation: 2,
    padding: 10,
    paddingHorizontal: 15,
    overflow: 'hidden',
  },
  name: {
    textAlign: 'center',
  },
  inputContainer: {
    flex: 1,
    backgroundColor: '#eee',
    borderRadius: 3,
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    padding: 0,
    paddingHorizontal: 15,
    fontSize: 15,
    backgroundColor: COLORS.white,
    color: COLORS.black,
  },
});

export default ContactScreen;
