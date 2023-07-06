import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, ScrollView, Keyboard, RefreshControl} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Toast from 'react-native-toast-message';
import {Container} from '@/components/Atoms';
import Form from '@/components/Form';
import {Button} from '@/components/Buttons';
import Header from '@/components/Headers/Header';
import Avatar from '@/components/Avatar';

import {openLaunchCamera} from '@/helper/permission';

import {
  setLoading,
  setRefreshLoading,
  setContactSelected,
} from '@/store/contactSlice';

import {
  createContactAPI,
  getContactByIdAPI,
  updateContactAPI,
  uploadAPI,
} from '@/api/Contact';
import {COLORS} from '@/constants';

const ContactUpdateScreen = ({route, navigation}) => {
  const dispatch = useDispatch();
  const title = route.params?.title || '';
  const id = route.params?.id || '';
  const contact = useSelector(state => state.contact);

  const [isFirstName, setIsFirstName] = useState('');
  const [isLastName, setIsLastName] = useState('');
  const [isAge, setIsAge] = useState('');

  const getInitialData = async () => {
    try {
      if (title === 'Ubah') {
        const resContact = await getContactByIdAPI(id);
        dispatch(setContactSelected(resContact.data.data));
      }
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'An error occurred: ' + err,
        position: 'bottom',
      });
    } finally {
      dispatch(setLoading(false));
      dispatch(setRefreshLoading(false));
    }
  };

  useEffect(() => {
    getInitialData();
  }, []);

  const handleChangeText = (field, val) => {
    dispatch(setContactSelected({...contact.contactSelected, [field]: val}));
  };

  const handleSubmit = async () => {
    Keyboard.dismiss();
    setIsFirstName('');
    setIsLastName('');
    setIsAge('');
    if (!contact.contactSelected.firstName) {
      return setIsFirstName('Masukan Nama Depan Anda Terlebih dahulu!');
    }
    if (!contact.contactSelected.lastName) {
      return setIsLastName('Masukan Nama Belakang Anda Terlebih dahulu!');
    }
    if (!contact.contactSelected.age) {
      return setIsAge('Masukan Umur Anda Terlebih dahulu!');
    }
    if (
      Number(contact.contactSelected.age) < 1 ||
      Number(contact.contactSelected.age) > 120
    ) {
      return setIsAge('Umur Anda diluar pemikiran!');
    }
    if (contact.contactSelected.firstName.length < 3) {
      return setIsFirstName('Masukan minimal 3 karakter');
    }
    if (contact.contactSelected.lastName.length < 3) {
      return setIsLastName('Masukan minimal 3 karakter');
    }
    if (!contact.contactSelected.photo) {
      return Toast.show({
        type: 'info',
        text1: 'Peringatan',
        text2: 'Masukan Foto Anda Terlebih dahulu!',
        position: 'bottom',
      });
    }

    dispatch(setRefreshLoading(true));
    try {
      const postData = {
        firstName: contact.contactSelected.firstName,
        lastName: contact.contactSelected.lastName,
        age: Number(contact.contactSelected.age),
        photo: contact.contactSelected.photo,
      };
      if (title === 'Ubah') {
        await updateContactAPI(postData, contact.contactSelected.id);
        getInitialData();
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Kontak berhasil di ubah..',
          position: 'bottom',
        });
        navigation.goBack();
      } else {
        await createContactAPI(postData);
        getInitialData();
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Kontak berhasil di buat..',
          position: 'bottom',
        });
        navigation.goBack();
      }
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'An error occurred: ' + err,
        position: 'bottom',
      });
    } finally {
      dispatch(setRefreshLoading(false));
    }
  };

  const openImage = useCallback(async () => {
    dispatch(setRefreshLoading(true));
    try {
      let res = await openLaunchCamera({
        mediaType: 'photo',
        includeBase64: false,
        quality: 0.4,
        maxHeight: 250,
        maxWidth: 250,
      });

      const payloadData = {
        uri: res?.assets[0]?.uri,
        name: res?.assets[0]?.fileName,
        type: res?.assets[0]?.type,
      };
      const formData = new FormData();
      formData.append('chatFile', payloadData);
      const resUploadImage = await uploadAPI(formData);
      const newData = {
        ...contact.contactSelected,
        photo: resUploadImage.data.data.url,
      };
      dispatch(setContactSelected(newData));
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'An error occurred: ' + err,
        position: 'bottom',
      });
    } finally {
      dispatch(setRefreshLoading(false));
    }
  }, [contact.contactSelected, dispatch]);

  const refreshHandler = async () => {
    dispatch(setRefreshLoading(true));
    getInitialData();
  };

  return (
    <Container>
      <Header title={`${title} Kontak`} />
      <Toast />
      <ScrollView
        contentContainerStyle={styles.wrapper}
        refreshControl={
          <RefreshControl
            refreshing={contact.isRefresh}
            onRefresh={refreshHandler}
            title="Pull to refresh"
            tintColor={COLORS.secondary}
            titleColor={COLORS.secondary}
          />
        }>
        <Avatar data={contact.contactSelected} onPress={openImage} />
        <Form
          placeholder="Nama Depan"
          title="Nama Depan"
          value={contact.contactSelected.firstName}
          onChangeText={val => handleChangeText('firstName', val)}
          error={isFirstName}
        />
        <Form
          placeholder="Nama Belakang"
          title="Nama Belakang"
          value={contact.contactSelected.lastName}
          onChangeText={val => handleChangeText('lastName', val)}
          error={isLastName}
        />
        <Form
          placeholder="Umur"
          title="Umur"
          value={contact.contactSelected.age.toString()}
          onChangeText={val => handleChangeText('age', val)}
          keyboardType="numeric"
          error={isAge}
          maxLength={3}
        />
        <Button title="Kirim" onPress={handleSubmit} style={styles.btn} />
      </ScrollView>
    </Container>
  );
};

export default ContactUpdateScreen;

const styles = StyleSheet.create({
  wrapper: {padding: 16},
  btn: {marginTop: 24},
});
