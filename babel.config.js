module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', {
      alias: {
        '@assets': './assets',
        '@components': './src/components',
        '@config': './src/config',
        '@constants': './src/constants',
        '@models': './src/models',
        '@screens': './src/screens',
        '@utils': './src/utils',
      }
    }]
  ]
};
