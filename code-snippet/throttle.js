function throttle(fun, ms) {
  let inputTime = 0;
  return (...rest) => {
    const now = Date.now();
    if (now - inputTime > ms) {
      inputTime = now;
      fun(...rest);
    }
  };
}
