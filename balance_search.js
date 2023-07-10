// 이더리움 보유량 조회
const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

async function main() {
  let balance = await web3.eth.getBalance("0x8b2FFC39aFCfffb765e6A639fba5ad9CA05E4759");
  console.log(balance);
}

main();
