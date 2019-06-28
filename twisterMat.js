// you can have a number repeat once in a column but never in a row
// how many mats can you make

const twisterMat = (n) => {
  // no decimals allowed just in case someone pulls a fast one
  const number = Math.floor(n)
  // 3 rows 8 options/row
  if (number === 1) console.log(24);
  //trickier math...(8 options * 2 spaces * 3 rows) +
  //                (7 options * 6 spaces * 3 rows)
  //only one available option for a third column so total answer of col 2 times 1 is the same number
  if (number === 2 || number === 3) console.log(174);
  else console.log(0);
};

twisterMat(3);