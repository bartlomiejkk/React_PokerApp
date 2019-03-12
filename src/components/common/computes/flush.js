const Flush = drawn => {
  let count = 0;
  let result = drawn.map(d => d.num);

  result = drawn.map(d => d.value.slice(0, 1));
  result.forEach(r => {
    let re = new RegExp(r, "g");
    let str = result.toString().replace(/,/g, "");
    count = str.match(re).length;
  });

  if (count === 5) return true;
  return false;
};

export default Flush;
