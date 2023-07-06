import React from 'react';
import {render} from '@testing-library/react-native';
import NotFound from '../../src/components/Errors/NotFound';

describe('NotFound component', () => {
  it('should render with correct text', () => {
    const {getByText} = render(<NotFound />);
    const textElement = getByText('Data Tidak ditemukan');
    expect(textElement).toBeTruthy();
  });
});
