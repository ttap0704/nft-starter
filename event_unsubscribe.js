// 이벤트 구독 해제
const Web3 = require("web3");
let web3 = new Web3(new Web3.providers.WebsocketProvider("ws://localhost:8545"));

let count = 0;
const blockSubscription = web3.eth.subscribe("newBlockHeaders", (error, blockHeader) => {
  console.log(blockHeader);
  console.log(error);

  count++;
  if (count > 3) {
    console.log("구독 해제 = 메모리 할당 해제");
    blockSubscription.unsubscribe();
  }
});
