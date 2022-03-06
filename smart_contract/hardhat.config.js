// https://eth-ropsten.alchemyapi.io/v2/_a8OXaaCX5s1-q9BhFyzlL5A8xmP71b-

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/_a8OXaaCX5s1-q9BhFyzlL5A8xmP71b-',
      accounts: ['6571b138481160f6e9f6cba3003a27d3253470f6a96259b7005102e7faa1d1c7']
    }
  }
}