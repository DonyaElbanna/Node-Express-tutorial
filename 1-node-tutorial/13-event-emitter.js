const EventEmitter = require("events");

const customeEmitter = new EventEmitter();

// event emitter has 2 methods (on - listen for event, emit - emit an event)
customeEmitter.on("response", (name, id) => {
  console.log(`data received: ${name} with id ${id}`);
});

customeEmitter.on("response", () => {
  console.log(`some other logic`);
});

customeEmitter.emit("response", "donya", 27);

//order matters, on before emit
