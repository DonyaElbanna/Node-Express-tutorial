//  stream is fr handling large data like readFile or writeFile
// 4 types: Readable (read data sequentially), Writable, Duplex (reading & writing), Transform (modify data when reading on writing)
// stream extends Event Emitter class

// creating a big data file in 15

const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

// default buffer size is 64kb
// last buffer - remainder
// highWaterMark - to control buffer size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

stream.on("data", (result) => {
  console.log(result);
});

// error event

stream.on("error", (err) => {
  console.log(err);
});
