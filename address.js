const Web3 = require("web3");
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// 개인키와 주소 생성
let createdAddess = web3.eth.accounts.create();
console.log(createdAddess);

// 개인키 > 키스토어 파일
let password = "test";
let keystore = createdAddess.encrypt(password);
console.log(keystore);

// 키스토어 파일 복구
let private = web3.eth.accounts.decrypt(keystore, password);
console.log(private);
