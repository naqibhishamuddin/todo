module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          api: './app/api',
          components: './app/components',
          hooks: './app/hooks',
          navigations: './app/navigations',
          screens: './app/screens',
          theme: './app/theme',
          utils: './app/utils',
        },
      },
    ],
  ],
};
