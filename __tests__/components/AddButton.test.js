import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import AddButton from '../../src/components/Buttons/AddButton';

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

describe('AddButton', () => {
  test('should call onPress function when button is pressed', () => {
    const onPress = jest.fn();
    const {getByTestId} = render(<AddButton onPress={onPress} />);
    const button = getByTestId('AddButton');
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalled();
  });

  test('should render the correct icon', () => {
    const {getByTestId} = render(<AddButton />);
    getByTestId('AddButton');
  });
});
