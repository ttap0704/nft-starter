// 스마트 콘트랙트 이벤트 시그니처 만들기
const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.WebsocketProvider("ws://localhost:8545"));

const way1 = web3.eth.abi.encodeEventSignature("Transfer(address,address,uint256)");
const way2 = web3.eth.abi.encodeEventSignature({
  name: "Transfer",
  type: "event",
  inputs: [
    {
      indexed: true,
      type: "address",
      name: "from",
    },
    {
      indexed: true,
      type: "address",
      name: "to",
    },
    {
      type: "uint256",
      name: "value",
    },
  ],
});

console.log(way1);
console.log(way2);
