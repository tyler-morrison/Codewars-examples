/**
 * CHALLENGE:
 *
 * You live in the city of Cartesia where all roads are laid out in a perfect grid.
 * You arrived ten minutes too early to an appointment, so you decided to take the
 * opportunity to go for a short walk.
 *
 * Given an array of directions — ['n', 's', 'w', 'e'] — and the knowledge that it takes
 * one minute to traverse one city block, create a function that will return true if the
 * directions will take you exactly ten minutes.  Return false otherwise
 */

let isValidWalk = (walk) => {
  // Start at 0,0 and increment or decrement each block...
  let dest = walk.reduce((prev, dir) => {
    switch (dir) {
      case 'n':
        prev.y++;
        break;
      case 's':
        prev.y--;
        break;
      case 'e':
        prev.x++;
        break;
      case 'w':
        prev.x--;
        break;
    }
    return prev;
  }, {
    x: 0,
    y: 0
  });

  // Only true if you return to same spot in 10 minutes
  return (!dest.x && !dest.y && walk.length === 10);
};

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); // True
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); // False
