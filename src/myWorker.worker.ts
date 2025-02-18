import { printHello } from "./utils/index";
import * as Comlink from "comlink";

const api = {
  add(a: number, b: number) {
    return a + b;
  },
  subtract(a: number, b: number) {
    return a - b;
  },
};

self.onmessage = (event) => {
  // console.log("Worker received:", event.data);
  // printHello();
  self.postMessage("Hello from worker");
};

// Comlink.expose(api);

export default {} as typeof Worker & { new (): Worker };
