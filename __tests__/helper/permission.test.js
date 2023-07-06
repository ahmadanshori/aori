import {PermissionsAndroid} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import {
  requestCameraPermission,
  openLaunchCamera,
} from '../../src/helper/permission';

// Mock the PermissionsAndroid module for testing
jest.mock('react-native', () => ({
  PermissionsAndroid: {
    request: jest.fn().mockResolvedValue('granted'),
    RESULTS: {
      GRANTED: 'granted',
      DENIED: 'denied',
    },
  },
  Platform: {
    OS: 'android',
  },
}));

// Mock the launchCamera function for testing
jest.mock('react-native-image-picker', () => ({
  launchCamera: jest.fn(),
}));

describe('requestCameraPermission', () => {
  it('should return false if permission is denied', async () => {
    PermissionsAndroid.request.mockImplementationOnce(() =>
      Promise.resolve('denied'),
    );
    const granted = await requestCameraPermission();
    expect(granted).toBe(false);
  });

  it('should return false if an error occurs', async () => {
    PermissionsAndroid.request.mockImplementationOnce(() =>
      Promise.reject(new Error('Permission request failed')),
    );
    const granted = await requestCameraPermission();
    expect(granted).toBe(false);
  });
});

describe('openLaunchCamera', () => {
  it('should resolve with response if camera permission is granted', async () => {
    const opt = {}; // Set your desired options for testing
    launchCamera.mockImplementationOnce((options, callback) => {
      callback({didCancel: false, errorMessage: null, errorCode: null});
    });

    const response = await openLaunchCamera(opt);
    expect(response).toBeDefined();
  });

  it('should reject with error message if an error occurs during camera launch', async () => {
    const opt = {}; // Set your desired options for testing
    launchCamera.mockImplementationOnce((options, callback) => {
      callback({
        didCancel: false,
        errorMessage: 'Camera launch failed',
        errorCode: null,
      });
    });

    await expect(openLaunchCamera(opt)).rejects.toMatch('Camera launch failed');
  });
});
