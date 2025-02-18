// 使用 self 作为 SharedWorkerGlobalScope
const ctx: SharedWorkerGlobalScope = self as any;

console.log("SharedWorker loaded");

ctx.onconnect = (event: MessageEvent) => {
  const port = event.ports[0];
  port.onmessage = (event: MessageEvent) => {
    console.log("SharedWorker received:", event.data);
    port.postMessage("Hello from shared worker");
  };
};

// 导出一个空对象以满足 TypeScript 的模块系统
export default {} as typeof SharedWorker & { new (): SharedWorker };
