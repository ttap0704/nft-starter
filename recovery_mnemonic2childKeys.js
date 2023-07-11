// 니모닉으로 주소 찾기
const bip39 = require("bip39");
const {hdkey} = require("ethereumjs-wallet");

const mnemonic = "stock confirm hover like smile icon correct item buzz bargain walk awful";
(async () => {
  const seed = await bip39.mnemonicToSeed(mnemonic);
  const rootKey = hdkey.fromMasterSeed(seed);
  const hardenedKey = rootKey.derivePath("m/44'/60'/0'/0"); // 이더리움 HD 경로

  for (let i = 0; i < 10; i++) {
    const childKey = hardenedKey.deriveChild(i); // 값을 조정하여 자식 키 생성
    const wallet = childKey.getWallet(); // 주소와 개인키를 하나의 쌍으로 가진 객체 가져오기
    const address = wallet.getAddress(); // 주소 가져오기
    const privateKey = wallet.getPrivateKey();

    console.log(`(${i}) 0x${address.toString("hex")}`);
  }
})();
