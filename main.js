const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('b753abbe4b4a58fd50ea8b4561b353a0e19c7bed8b680e8086a27147907b4878');
const myWalletAddress = myKey.getPublic('hex');

let savjeeCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
savjeeCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
savjeeCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of xavier is', savjeeCoin.getBalanceOfAddress(myWalletAddress));

// savjeeCoin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid?', savjeeCoin.isChainValid());