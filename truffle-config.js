require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note shift pudding hidden entire front second'; 
let testAccounts = [
"0xa196e546fc37a4f36f2f1b3d665809d43c464c3438d1a2f26cd3ce9703bb40b0",
"0x80a31cf4492b1cafeaa9b49bd0ebf8cd5ad65dd3ce23ad22b591943d2e898abb",
"0x3c3b9756c4bebeeff01eaa2ba6d445cf0b131e38b9efd6ae27bc1a3ea72a6985",
"0xa91191e9aed045cf73e5702cc12d16c92a0d9a6b23046233f35626ea7f2a07ee",
"0xbdf09bb953ae3787d8fd5c2510085352d382768245a8bec82c862633d7a19f29",
"0x4c9d30c79f28d43a35f6363ff8ac3d67e2a85ed16d21cdcbd2abb3ffbf857176",
"0x55abe8024316b57a4ad62dc92646fda9b9f4584cf5a6c85c89862fee0cda0e8e",
"0xf0a9194fe0b876f818c390db6ce41535bf30adcf419a478d8312aaf8220e74e9",
"0xea38e5662102400cb4d7c3c75e813a5415298b41578dbd3da8dd783300ee91ba",
"0x67544a1a70955ca008f0592ad75c0f6865fa8b3aac43cff9f5a3794596011e24"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
