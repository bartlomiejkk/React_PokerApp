const Straight = drawn => {
  const compare = (a, b) => a - b;
  const copyArray = [];
  let result = drawn.map(d => d.num);

  result = result.sort(compare);
  for (let i = 0; i < 5; i++) copyArray.push(result[0] + i); // creating fake card draw that matches Straight
  if (result.toString() === copyArray.toString()) return true;

  return false;
};

export default Straight;
