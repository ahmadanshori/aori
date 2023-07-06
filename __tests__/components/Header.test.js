import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Header from '../../src/components/Headers/Header';
import {useNavigation} from '@react-navigation/native';

jest.mock('react-native-vector-icons/AntDesign', () => 'Icon');
jest.mock('@react-navigation/native', () => ({
  useIsFocused: jest.fn(),
  useNavigation: jest.fn(),
}));

describe('Header component', () => {
  test('renders correctly with given props', () => {
    const {getByText} = render(<Header title="Test Header" />);
    const titleElement = getByText('Test Header');
    expect(titleElement).toBeTruthy();
  });

  test('calls backPress function when back button is pressed', () => {
    const mockBackPress = jest.fn();
    const {getByTestId} = render(
      <Header title="Test Header" backPress={mockBackPress} />,
    );
    const backButton = getByTestId('back-button');
    fireEvent.press(backButton);
    expect(mockBackPress).toHaveBeenCalledTimes(1);
  });

  test('navigates back when back button is pressed if backPress function is not provided', () => {
    const mockGoBack = jest.fn();
    useNavigation.mockReturnValueOnce({
      goBack: mockGoBack,
    });
    const {getByTestId} = render(<Header title="Test Header" />);
    const backButton = getByTestId('back-button');
    fireEvent.press(backButton);
    expect(mockGoBack).toHaveBeenCalledTimes(1);
  });
});
