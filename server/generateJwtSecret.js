const crypto = require('crypto');

function generateJwtSecret() {
  return crypto.randomBytes(30).toString('hex');
}

console.log(generateJwtSecret());
