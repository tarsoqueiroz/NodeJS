// encrypt-file.js

const openpgp = require("openpgp")
const fs = require("fs")
const pgpParts = require("./pgpB-parts.json")

async function encrypt() {
  const plainData = fs.readFileSync('pgpA-text.txt')
  const encrypted = await openpgp.encrypt({
    message: openpgp.message.fromText(plainData),
    publicKeys: (await openpgp.key.readArmored(pgpParts.publicKeyArmored)).keys,
  })

  fs.writeFileSync("pgpC-encrypted-text.txt", encrypted.data)
}

encrypt()
