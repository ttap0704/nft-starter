const Web3 = require("web3");
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const PK = "0xae7f7bdfa997988053db954f74a9a31e7436702a80e72e0a0bf8da93dc7e82ea";

let account = web3.eth.accounts.privateKeyToAccount(PK);
console.log(account);
