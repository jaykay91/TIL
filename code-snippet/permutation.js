// Permutation
function P(list, r) {
  const initList = list.map(v => [v]);

  if (r === 1) {
    return initList;
  }

  const recur = oldList => {
    if (r > 1) {
      const newList = [];

      for (const chunk of oldList) {
        for (const v of list) {
          if (chunk.includes(v)) {
            continue;
          }
          newList.push([...chunk, v]);
        }
      }
      r--;

      return recur(newList);
    } else {
      // Exit Condition
      return oldList;
    }
  };

  return recur(initList);
}
