const fs = require("fs");
const path = require("path");
fs.copyFileSync(path.join(__dirname, "../src/styles/moonslip.css"), path.join(__dirname, "../dist/moonslip.css"));
console.log("copied moonslip.css -> dist/");
