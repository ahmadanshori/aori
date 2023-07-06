import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ContactItem from '../../src/components/Lists/ContactItem';

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');
jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');
jest.mock('react-native-vector-icons/Feather', () => 'Icon');

describe('ContactItem', () => {
  const item = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    photo: 'http://example.com/photo.jpg',
  };
  it('renders the contact details correctly', () => {
    const {getByText} = render(<ContactItem item={item} />);
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('Umur: 30')).toBeTruthy();
  });
  it('calls the onEdit function when edit button is pressed', () => {
    const onEditMock = jest.fn();
    const {getByTestId} = render(
      <ContactItem item={item} onEdit={onEditMock} />,
    );
    fireEvent.press(getByTestId('edit-button'));
    expect(onEditMock).toHaveBeenCalledWith(item.id);
  });
  it('calls the onDelete function when delete button is pressed', () => {
    const onDeleteMock = jest.fn();
    const {getByTestId} = render(
      <ContactItem item={item} onDelete={onDeleteMock} />,
    );
    fireEvent.press(getByTestId('delete-button'));
    expect(onDeleteMock).toHaveBeenCalled();
  });
  it('displays default profile image when photo URL is invalid', () => {
    const invalidItem = {
      ...item,
      photo: 'invalid-url',
    };
    const {getByTestId} = render(<ContactItem item={invalidItem} />);
    expect(getByTestId('default-image')).toBeTruthy();
  });
});
