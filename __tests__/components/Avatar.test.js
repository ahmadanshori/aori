import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Avatar from '../../src/components/Avatar';

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');

describe('Avatar component', () => {
  test('renders without crashing', () => {
    render(<Avatar />);
  });
  test('renders image if valid URL is provided', () => {
    const data = {photo: 'https://example.com/avatar.jpg'};
    const {getByTestId} = render(<Avatar data={data} />);
    const image = getByTestId('avatar-image');
    expect(image.props.source.uri).toBe(data.photo);
  });
  test('renders camera icon if invalid URL is provided', () => {
    const data = {photo: 'invalid-url'};
    const {getByTestId} = render(<Avatar data={data} />);
    const cameraIcon = getByTestId('avatar-camera-icon');
    expect(cameraIcon).toBeTruthy();
  });
  test('calls onPress when TouchableOpacity is pressed', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(<Avatar onPress={onPressMock} />);
    const touchableOpacity = getByTestId('avatar-touchable-opacity');
    fireEvent.press(touchableOpacity);
    expect(onPressMock).toHaveBeenCalled();
  });
});
