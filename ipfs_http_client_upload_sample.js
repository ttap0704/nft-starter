const IpfsHttpClient = require("ipfs-http-client");
const fs = require("fs");

const ipfs = IpfsHttpClient.create("http://localhost:5001");

async function main() {
  const file = fs.readFileSync("./test.txt");
  let rst = await ipfs.add(file);
  console.log(rst);
}

main();
