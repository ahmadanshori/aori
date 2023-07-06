import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import Form from '../../src/components/Form';

describe('Form component', () => {
  test('renders correctly', () => {
    const {getByPlaceholderText, getByText} = render(<Form title="Test" />);
    waitFor(() => {
      const input = getByPlaceholderText('Enter value');
      const title = getByText('Test');
      expect(input).toBeDefined();
      expect(title).toBeDefined();
    });
  });

  // Rest of the tests...
});
