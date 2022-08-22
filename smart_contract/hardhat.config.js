//https://eth-goerli.g.alchemy.com/v2/LMPdPXW-ZW-7h-hVV9cLs-FkEG0zJJ2V

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/LMPdPXW-ZW-7h-hVV9cLs-FkEG0zJJ2V',
      accounts: ['d3affc51e1556f6c97428a1e1ccd17d8b69864125ef5cf32621fef3c2c6df6a7']
    }
  }
}