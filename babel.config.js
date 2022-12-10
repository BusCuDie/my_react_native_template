module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
          '.native.js',
          '.ios.tsx',
          'android.tsx',
        ],
        alias: {
          assets: './src/assets',
          animations: './src/animations',
          components: './src/components',
          config: './src/config',
          constants: './src/constants',
          hooks: './src/hooks',
          screens: './src/screens',
          locales: './src/locales',
          navigation: './src/navigation',
          store: './src/store',
          themes: './src/themes',
          transforms: './src/transforms',
          utils: './src/utils',
        },
      },
    ],
  ],
};
