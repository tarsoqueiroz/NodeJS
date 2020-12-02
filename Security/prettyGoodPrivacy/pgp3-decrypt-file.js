// decrypt-file.js

const openpgp = require("openpgp")
const fs = require("fs")
const pgpParts = require("./pgpB-parts.json")

async function decrypt() {
  const privateKey = (await openpgp.key.readArmored([pgpParts.privateKeyArmored])).keys[0]
  await privateKey.decrypt(pgpParts.passphrase)

  const encryptedData = fs.readFileSync("pgpC-encrypted-text.txt")
  const decrypted = await openpgp.decrypt({
    message: await openpgp.message.readArmored(encryptedData),
    privateKeys: [privateKey],
  })

//  console.log(decrypted.data)
  fs.writeFileSync("pgpD-decrypted-text.txt", decrypted.data)
}

decrypt()
