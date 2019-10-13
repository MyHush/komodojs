/*
config.js - Configuration for Komodo Coin
*/

module.exports = {
  mainnet: {
messagePrefix: '\x18Komodo Signed Message:\n',
  bip32: {
    public: '0488b21e',
    private: '0488ade4'
   },
   pubKeyHash: '3c',
   scriptHash: '55',

  zcPaymentAddressHash: '169a', // Private z-address
  zcSpendingKeyHash: 'ab36', // Spending key
  wif: '80'
  },
  testnet: {
    messagePrefix: '\x18Komodo Signed Message:\n',
    bip32: {
      public: '0488b21e',
      private: '0488ade4'
     },
     pubKeyHash: '3c',
     scriptHash: '55',
  
    zcPaymentAddressHash: '169a', // Private z-address
    zcSpendingKeyHash: 'ab36', // Spending key
    wif: '80'
  }
};