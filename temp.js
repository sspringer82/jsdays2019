function hello() {
  // return Promise.resolve(42);
  return Promise.reject();
}

try {
  setTimeout(() => {
    Promise.reject(new Error());
  }, 1000);
} catch (e) {}
