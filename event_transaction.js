// 트랜젝션 이벤트 수신
const Web3 = require("web3");
let web3 = new Web3(new Web3.providers.WebsocketProvider("ws://localhost:8545"));

const subscription = web3.eth.subscribe("pendingTransactions", (error, blockHeader) => {
  console.log(blockHeader);
});
