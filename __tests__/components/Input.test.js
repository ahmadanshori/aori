import React from 'react';
import {render} from '@testing-library/react-native';
import Input from '../../src/components/Atoms/Input';

describe('Input component', () => {
  it('should render without errors', () => {
    render(<Input />);
  });
});
