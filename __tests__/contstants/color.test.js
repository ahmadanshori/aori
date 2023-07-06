import colors from '../../src/constants/color';

describe('Colors', () => {
  test('primary color should be "#4287f5"', () => {
    expect(colors.primary).toBe('#4287f5');
  });

  test('shadowPrimary color should be "rgba(4, 29, 219,0.1)"', () => {
    expect(colors.shadowPrimary).toBe('rgba(4, 29, 219,0.1)');
  });

  test('secondary color should be "#D21988"', () => {
    expect(colors.secondary).toBe('#D21988');
  });

  test('white color should be "#ffffff"', () => {
    expect(colors.white).toBe('#ffffff');
  });

  test('shadowWhite color should be "rgba(255, 255, 255,0.3)"', () => {
    expect(colors.shadowWhite).toBe('rgba(255, 255, 255,0.3)');
  });

  test('gray color should be "#b2b2b2"', () => {
    expect(colors.gray).toBe('#b2b2b2');
  });

  test('black color should be "#0A0A0A"', () => {
    expect(colors.black).toBe('#0A0A0A');
  });

  test('error color should be "#B00020"', () => {
    expect(colors.error).toBe('#B00020');
  });

  test('red color should be "#f54260"', () => {
    expect(colors.red).toBe('#f54260');
  });

  test('blackShadow color should be "rgba(0,0,0, 0.1)"', () => {
    expect(colors.blackShadow).toBe('rgba(0,0,0, 0.1)');
  });
});
