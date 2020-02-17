function debounce(fun, waitTime) {
  let timeoutId;
  let callTime = 0;

  return (...rest) => {
    const now = Date.now();

    if (now < callTime) {
      clearTimeout(timeoutId);
    }

    callTime = now + waitTime;
    timeoutId = setTimeout(() => {
      fun(...rest);
    }, waitTime);
  };
}
