const IpfsHttpClient = require("ipfs-http-client");

const ipfs = IpfsHttpClient.create("http://ipfs.infura.io:5001");

async function main() {
  const chunks = [];
  const path = "QmVnNM8Gj1bqu4PSKBCzxfLRKHjDMTTesABquBXmZ9SfLn";

  for await (const chunk of ipfs.cat(path)) {
    chunks.push(chunk);
  }

  console.log(chunks.toString());
}

main();
