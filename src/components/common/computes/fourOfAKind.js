const FourOfAKind = drawn => {
  let count = 0;
  const result = drawn.map(d => d.value.slice(1));

  result.forEach(r => {
    const filtered = result.filter(res => res === r);
    if (filtered.length === 4) count = 4;
  });
  if (count === 4) return true;

  return false;
};

export default FourOfAKind;
