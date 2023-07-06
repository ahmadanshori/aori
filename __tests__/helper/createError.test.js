import getErrorMessage from '../../src/helper/createError';

describe('getErrorMessage', () => {
  test('should return error message from error response', () => {
    const error = {
      response: {
        data: {
          message: 'Error message',
        },
      },
    };
    const result = getErrorMessage(error);
    expect(result).toBe('Error message');
  });

  test('should return default message for error without response', () => {
    const error = {};
    const result = getErrorMessage(error);
    expect(result).toBe('Ada masalah dengan koneksi.');
  });
});
