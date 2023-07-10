const IPFS = require("ipfs-api");
const ipfs = new IPFS({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https",
});

const hash = "QmVnNM8Gj1bqu4PSKBCzxfLRKHjDMTTesABquBXmZ9SfLn";

ipfs.files.get(hash, (err, f) => {
  console.log(f, err);
  // console.log(f[0].content.toString());
});
