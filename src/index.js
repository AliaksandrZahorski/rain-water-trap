module.exports = function trapRainWater(elevationMap) {
  const input = elevationMap;

  const isSolid = (x, y) => input[x] < y;

  const x = input.length;
  const y = Math.max( ...input );

  const full = x * y;
  const solid = input.reduce((a, b) => a + b, 0);

  let j = 1;
  let free = 0;
  let i = 0;

  for (let j = 1; j <= y; j++) {
    i = 0;
    while (isSolid(i, j)) {
      free++;
      i++;
    }
    i = x - 1;
    while (isSolid(i, j)) {
      free++;
      i--;
    }
  }

  return full - (solid + free);
}
