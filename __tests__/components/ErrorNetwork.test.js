import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ErrorNetwork from '../../src/components/Errors/ErrorNetwork';

describe('ErrorNetwork', () => {
  test('should render correctly', () => {
    const {getByText} = render(<ErrorNetwork />);
    const title = getByText('No Internet Access');
    const message = getByText(
      'Silakan periksa koneksi dan data Anda, terima kasih!',
    );
    const refreshButton = getByText('Refresh');
    expect(title).toBeTruthy();
    expect(message).toBeTruthy();
    expect(refreshButton).toBeTruthy();
  });

  test('should call onPress event when refresh button is pressed', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(<ErrorNetwork onPress={onPressMock} />);
    const refreshButton = getByText('Refresh');
    fireEvent.press(refreshButton);
    expect(onPressMock).toHaveBeenCalled();
  });
});
