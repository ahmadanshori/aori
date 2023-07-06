// Mocking Dimensions.get('window') method
jest.mock('react-native', () => ({
  Dimensions: {
    get: jest.fn().mockReturnValue({height: 600, width: 800}),
  },
}));

describe('MyComponent styles', () => {
  let styles;

  beforeAll(() => {
    // Importing styles after mocking Dimensions
    styles = require('../../src/constants/size').default;
  });

  it('should have correct opacity value', () => {
    expect(styles.opacity).toBe(0.8);
  });

  it('should have correct height value', () => {
    expect(styles.height).toBe(600);
  });

  it('should have correct width value', () => {
    expect(styles.width).toBe(800);
  });

  it('should have correct width0 value', () => {
    expect(styles.width0).toBe(800 / 1.15);
  });

  it('should have correct width1 value', () => {
    expect(styles.width1).toBe(800 / 1.5);
  });

  it('should have correct width2 value', () => {
    expect(styles.width2).toBe(800 / 2);
  });

  it('should have correct width3 value', () => {
    expect(styles.width3).toBe(800 / 3);
  });

  it('should have correct shadow properties', () => {
    expect(styles.shadow).toEqual({
      elevation: 2,
      shadowOffset: {height: 0, width: 1},
      shadowOpacity: 0.2,
      shadowRadius: 2,
    });
  });
});
