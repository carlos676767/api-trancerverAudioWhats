const fs = require("fs");

function UnlinkValue(url) {
  setTimeout(() => {
    fs.unlinkSync(url);
  }, 15000);
}

module.exports = UnlinkValue;
