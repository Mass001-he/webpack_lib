import MyWorker from "./myWorker.worker";
import * as Comlink from "comlink";
import MySharedWorker from "./mySharedWorker.sharedworker";

async function init() {
  const worker = new MyWorker();
  console.log("new worker over");
  worker.postMessage("Hello from main thread");
  worker.onmessage = (event: MessageEvent) => {
    console.log("Received from worker:", event.data);
  };
  const api = Comlink.wrap<{
    add(a: number, b: number): Promise<number>;
    subtract(a: number, b: number): Promise<number>;
  }>(worker);

  const resultAdd = await api.add(1, 2);
  console.log("Result of add:", resultAdd); // 输出: Result of add: 3

  const resultSubtract = await api.subtract(5, 3);
  console.log("Result of subtract:", resultSubtract); // 输出: Result of subtract: 2
}

init();

const sharedWorker = new MySharedWorker();
sharedWorker.port.postMessage("Hello from main thread");
sharedWorker.port.onmessage = (event: MessageEvent) => {
  console.log("Received from shared worker:", event.data);
};
