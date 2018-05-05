/*
config.js - Configuration for Zelcash
*/

module.exports = {
    mainnet: {
        messagePrefix: 'Komodo mainnet',
        bip32: {
            public: '0488b21e',
            private: '0488ade4'
        },
        pubKeyHash: '3c',
        scriptHash: '55',
        zcPaymentAddressHash: '169a',
        zcSpendingKeyHash: 'ab36',
        wif: '80'
    },
    testnet: {
        messagePrefix: 'Zelcash testnet',
        bip32: {
            public: '043587cf',
            private: '04358394'
        },
        pubKeyHash: '1d25',
        scriptHash: '1cba',
        zcPaymentAddressHash: '16b6',
        zcSpendingKeyHash: 'ac08',
        wif: 'ef'
    }
};