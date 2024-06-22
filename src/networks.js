module.exports = {
    borsh: {
        messagePrefix: '\x15Borsh Signed Message:\n',
        bech32: 'bc',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x19,
        scriptHash: 0x35,
        wif: 0x80
    },
    borsh_testnet: {
        messagePrefix: '\x15Borsh Signed Message:\n',
        bech32: 'tb',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x55,
        scriptHash: 0x70,
        wif: 0xef
    }
}
