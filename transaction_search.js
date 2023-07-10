const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

async function main() {
  let hash = "0x7bec6a6212040abae4a0b488132240d6c3fd8db20e9aa5767919dd777ad29cb8";
  let tx = await web3.eth.getTransaction(hash);
  console.log(tx);
}

main();
