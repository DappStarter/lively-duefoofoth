require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name rate stereo proud hunt kite orange tribe'; 
let testAccounts = [
"0xba2740c7a403cc57f710f84538f798db4550e108e25716e68ff2bdec2bd1f92d",
"0xa285a99e68654a0a49c25161c725027122acef9b8f042880daa9a1faeb8df7c6",
"0x570e8ecf30bfca1d033b1a8eb13a1fb14fa5abaa391be07ed8d29d3cc87dfb12",
"0x61cdbe192b9eeeec95361e558f95b37ddb0b68f53b77361c6f80902c94b774b6",
"0x83708a1e0036c5814527061bb1bc9f3e0c7bcef314e7c7454e3b77413e8fc15e",
"0x1146b581df779cf54be93c92d3ef63378750e5ba067df9807288100f609dde13",
"0x254ec2fa2ebd135840e2ad900023d5332ceb21ccb3cce416f1be92a2c675be5c",
"0x3cf95973338c61800d054d19ec9bd4dadef6e961ddf194e5049f758fde25e6dc",
"0x307adbae6518445a59c8527966d5777ce8a01a288aaa3422e21c452c903acbcd",
"0xc5d6ff1febac7c11a27ed51dc54054a28453cbfe647d6afcf5f4ab8110c40fb9"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
