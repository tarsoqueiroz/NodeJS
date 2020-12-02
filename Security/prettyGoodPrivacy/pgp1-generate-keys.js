// generate-keys.js

const openPgp = require("openpgp")
const fs = require("fs")

// save for didatic pourpouse
let pgpParts = {}
pgpParts.name = "Person Name"
pgpParts.email = "person@name.com"
pgpParts.curve = "ed25519"
pgpParts.passphrase = "changeit"

async function generate() {
  const { privateKeyArmored, publicKeyArmored } = await openPgp.generateKey({
    userIds: [{ name: pgpParts.name,
                email: pgpParts.email
              }],
    curve: pgpParts.curve,
    passphrase: pgpParts.passphrase,
  })

  pgpParts.publicKeyArmored = publicKeyArmored
  pgpParts.privateKeyArmored = privateKeyArmored

  fs.writeFileSync("pgpB-parts.json", JSON.stringify(pgpParts))

  console.log("PGP parts generated...")
}

generate();
