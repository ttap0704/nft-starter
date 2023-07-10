const Web3 = require("web3");
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

async function main() {
  const from = "0x2281fE66006C5d491707FfE57a9e7e1B76615C9A";
  const pk = "0x18c1816ea1fcc1c5755cd8f0506957d2c5fd8302429ded6701e6b85ef96a7f92";
  const to = "0xf2Af0bc77a08Ea45C8ce2f6F902048680489A073";

  // 0x0 Type
  const tx = {
    from,
    to,
    gas: 21000,
    gasPrice: 21000000000,
    value: "10000000000",
  };

  // 0x02 Type
  // const tx = {
  //   from,
  //   to,
  //   gas: 25000,
  //   maxFeePerGas: "0xb2d05e00",
  //   maxPriorityFeePerGas: "0xb2d05e00",
  //   value: "10000000000",
  // };

  const account = web3.eth.accounts.privateKeyToAccount(pk);
  const signedTx = await account.signTransaction(tx);
  const sendTx = await web3.eth.sendSignedTransaction(signedTx.raw || signedTx.rawTransaction);

  console.log(sendTx);
}

main();
