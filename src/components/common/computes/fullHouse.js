const FullHouse = drawn => {
  const result = drawn.map(d => d.num);
  let two = false; // two and three relate to the number of same value cards
  let three = false; // two: < 2 = false  three: < 3 = false

  result.forEach(r => {
    const filtered = result.filter(res => res === r);
    if (filtered.length === 3) two = true;
    if (filtered.length === 2) three = true;
  });
  if (two && three) return true;

  return false;
};

export default FullHouse;
