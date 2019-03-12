const TwoPairs = drawn => {
  let count = 0;
  let result = drawn.map(d => d.value.slice(1));

  result.forEach(r => {
    result = result.slice(r.indexOf(r) + 1);
    if (result.indexOf(r) !== -1) count++;
  });

  if (count > 1) return true;
  return false;
};

export default TwoPairs;
