module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.json'],
        alias: {
          '@': './src',
          '@/components': './src/components',
          '@/screens': './src/screens',
          '@/icons': './src/assets/icons',
          '@/images': './src/assets/images',
          '@/api': './src/api',
          '@/constants': './src/constants',
          '@/helper': './src/helper',
          '@/store': './src/store',
          '@/context/*': ['./src/context/*'],
        },
      },
    ],
  ],
};
