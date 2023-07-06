import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ErrorServer from '../../src/components/Errors/ErrorServer';

describe('ErrorServer component', () => {
  test('renders correctly', () => {
    const {getByText} = render(<ErrorServer />);
    const title = getByText('Ada yang salah…');
    const message = getByText(
      'Kami sedang berusaha memperbaiki masalah tersebut. Silakan coba lagi.',
    );
    const refreshButton = getByText('Refresh');
    expect(title).toBeTruthy();
    expect(message).toBeTruthy();
    expect(refreshButton).toBeTruthy();
  });
  test('calls onPress event when refresh button is pressed', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(<ErrorServer onPress={onPressMock} />);
    const refreshButton = getByText('Refresh');
    fireEvent.press(refreshButton);
    expect(onPressMock).toHaveBeenCalled();
  });
});
