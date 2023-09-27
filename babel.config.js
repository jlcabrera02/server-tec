module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@config': './src/config',
          '@controllers': './src/controllers',
          '@routes': './src/routes',
          '@models': './src/models',
          '@services': './src/services',
          '@config': './src/config',
          '@middlewares': './src/middlewares'
        }
      }
    ]
  ]
};
