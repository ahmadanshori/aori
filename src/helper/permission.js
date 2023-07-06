import {PermissionsAndroid, Platform} from 'react-native';

import {launchCamera} from 'react-native-image-picker';

export const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Camera Permission',
        message: 'This App needs access to your camera',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};

export const openLaunchCamera = opt => {
  let promise = new Promise((resolve, reject) => {
    if (Platform.OS === 'android') {
      requestCameraPermission()
        .then(ok => {
          launchCamera(opt, response => {
            if (response.didCancel) {
              reject('User cancelled Camera');
            } else if (response?.errorMessage) {
              reject(response?.errorMessage);
            } else if (response.errorCode) {
              reject('User tapped custom button: ');
            } else {
              resolve(response);
            }
          });
        })
        .catch(err => {
          reject(err);
        });
    } else {
      launchCamera(opt, response => {
        if (response.didCancel) {
          reject('User cancelled Camera');
        } else if (response.errorMessage) {
          reject(response.errorMessage);
        } else if (response.errorCode) {
          reject('User tapped custom button: ');
        } else {
          resolve(response);
        }
      });
    }
  });
  return promise;
};
