// flag 'a' to append

const { writeFileSync } = require("fs");
for (let i = 0; i < 10000; i++) {
  writeFileSync("./content/big.txt", `hello ${i}\n`, { flag: "a" });
}
