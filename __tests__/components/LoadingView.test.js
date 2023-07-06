import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import LoadingIndicator from '../../src/components/Loadings/LoadingView';
import {COLORS, SIZES} from '../../src/constants';

describe('LoadingIndicator', () => {
  it('should render the loading indicator', async () => {
    const {getByTestId} = render(<LoadingIndicator />);
    const loadingIndicator = getByTestId('loading-indicator');
    await waitFor(() => {
      expect(loadingIndicator).toBeTruthy();
    });
  });

  it('should have correct styles', () => {
    const {getByTestId} = render(<LoadingIndicator />);
    const loadingIndicator = getByTestId('loading-indicator');
    waitFor(() => {
      expect(loadingIndicator.props.style).toEqual({
        height: SIZES.height,
        position: 'absolute',
        zIndex: 999,
        width: SIZES.width,
        backgroundColor: COLORS.shadowWhite,
        justifyContent: 'center',
        alignItems: 'center',
      });
    });
  });
});
