import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from '../../src/components/Buttons/Button';

describe('Button', () => {
  test('renders correctly with title', () => {
    const {getByText} = render(<Button title="Submit" />);
    const buttonElement = getByText('Submit');
    expect(buttonElement).toBeTruthy();
  });
  test('calls onPress function when pressed', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(<Button title="Submit" onPress={onPressMock} />);
    const buttonElement = getByText('Submit');
    fireEvent.press(buttonElement);
    expect(onPressMock).toHaveBeenCalled();
  });
});
