const Web3 = require("web3");
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

async function main() {
  const CA = "0x41d57343907E7923FD4ec9bD1789265efAaf3bA9";
  const from = "0xA6DFcc020ADfcA6B7f1cB34130B47C57D966533c";
  const pk = "0x0939607e09bc41adefe797ba46d2983d8dad1cb7775da1d78de7b30d43f86634";
  const ABI = [
    {
      inputs: [
        {
          internalType: "string",
          name: "_text",
          type: "string",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "text",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_text",
          type: "string",
        },
      ],
      name: "setText",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "say",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "a",
          type: "uint256",
        },
      ],
      name: "errorOccur",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "pure",
      type: "function",
      constant: true,
    },
  ];

  // 스마트 콘트랙트 객체 생성
  let Contract = new web3.eth.Contract(ABI, CA);

  // 스마트 콘트랙트에 정의한 함수 실행
  let bytedata = await Contract.methods.setText("test").encodeABI();
  console.log(bytedata);

  const tx = {
    from,
    to: CA,
    gas: 1000000,
    gasPrice: "21000000000",
    data: bytedata,
  };

  const account = web3.eth.accounts.privateKeyToAccount(pk);
  const signedTx = await account.signTransaction(tx);
  const sendTx = await web3.eth.sendSignedTransaction(signedTx.raw || signedTx.rawTransaction);

  console.log(sendTx);
}

main();
