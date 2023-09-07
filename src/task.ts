export const runTask = <T>(task: () => T, cb: (v: T) => void) => {
  const start = Date.now();
  requestAnimationFrame(() => {
    if (Date.now() - start < 16.55) {
      cb(task());
    } else {
      return runTask(task, cb);
    }
  });
};

export const setCo = <T>(callback: () => T): Promise<T> =>
  new Promise(resolve => {
    runTask(callback, resolve);
    // setTimeout(() => {
    //   resolve(callback());
    // }, 1);
  });
