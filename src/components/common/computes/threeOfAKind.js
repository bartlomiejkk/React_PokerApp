const ThreeOfAKind = drawn => {
  let count = 0;
  const result = drawn.map(d => d.value.slice(1));

  result.forEach(r => {
    const filtered = result.filter(res => res === r);
    if (filtered.length === 3) count = 3;
  });

  if (count === 3) return true;
  return false;
};

export default ThreeOfAKind;
