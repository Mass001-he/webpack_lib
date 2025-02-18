interface SharedWorkerGlobalScope extends WorkerGlobalScope {
  onconnect: ((this: SharedWorkerGlobalScope, ev: MessageEvent) => any) | null;
}

declare var self: SharedWorkerGlobalScope;
