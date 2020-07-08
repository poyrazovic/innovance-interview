const env = process.env.NODE_ENV || 'development';

const configs = {
  development: {
    api: 'https://pokeapi.co/api/v2',
    loaderTimeout: 1000
  },
  test: {
    api: '',
    loaderTimeout: 1000
  },
  production: {
    api: '',
    loaderTimeout: 1000
  }
}[env];

export default configs;