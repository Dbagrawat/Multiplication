const findMultiples = (numbers, multipleOf) => {
  let multiples = [];
  numbers.forEach((element) => {
    if (element % multipleOf === 0) {
      multiples.push(element);
    }
  });
  return multiples;
};

export default findMultiples;
