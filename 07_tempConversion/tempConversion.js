const ftoc = function(fah) {
  let cel;
  cel = (fah - 32) * (5/9);
  return Number(cel.toFixed(1));
};

const ctof = function(cel) {
  let fah;
  fah = cel * (9/5) + 32;
  return Number(fah.toFixed(1));
};

ftoc(-100)

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
