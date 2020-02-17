// Combination
function C(list, r) {
  // 초기값을 생성한다.
  const initList = list.map((v, i) => {
    const used = list.map(() => false);
    used[i] = true;
    return [[v], used];
  });

  if (r === 1) {
    return initList;
  }

  const recur = oldList => {
    if (r > 1) {
      const newList = [];

      for (const [chunk, used] of oldList) {
        for (const [k, v] of list.entries()) {
          // 기존에 이미 사용한 값은 넘어간다.
          if (used[k]) {
            continue;
          }

          // 새로 추가될 조합과 같은 조합이 존재하는지 확인한다.
          const newUsed = [...used];
          newUsed[k] = true;

          const isIncludes = newList.some(([_, oldUsed]) => {
            return oldUsed.every((v, i) => v === newUsed[i]);
          });

          // 같은 조합이 있으면 넘어간다.
          if (isIncludes) {
            continue;
          }

          // 새로운 조합을 추가한다.
          newList.push([[...chunk, v], newUsed]);
        }
      }
      r--;

      return recur(newList);
    } else {
      // 종료 조건
      return oldList;
    }
  };

  return recur(initList);
}
