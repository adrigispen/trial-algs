function generateTestGrids() {
  let grids = [];
  for (let i = 0; i < 10; i++) {
    let m = parseInt(Math.random() * 10) + 1; // we want at least 1 elem in each row
    let n = parseInt(Math.random() * 10) + 1; // and at least 1 in each col
    let grid = [];
    for (let j = 0; j < m; j++) {
      let temp = [];
      for (let k = 0; k < n; k++) {
        temp[k] = { val: Math.random() * 10 < 8 ? "o" : "x", count: 0 };
      }
      grid[j] = temp;
    }
    grids.push({ grid: grid, size: getMaxSize(grid) });
  }
  return grids;
}

function getMaxSize(grid) {
  let max = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (countSize(grid, i, j) > max) max = countSize(grid, i, j);
    }
  }
  return max;
}

function countSize(grid, i, j) {
  if (grid[i][j].val === "x") return 0;
  let size = 1;
  for (let l = 1; l <= Math.min(grid.length, grid[i].length); l++) {
    if (surroundingsIncludeXs(grid, i, j, l)) {
      size = l;
      break;
    } else {
      size++;
    }
  }
  return size;
}

function surroundingsIncludeXs(grid, i, j, len) {
  for (let m = i; m <= i + len; m++) {
    for (let n = j; n <= j + len; n++) {
      if (n >= grid[i].length || m >= grid.length) return true;
      if (grid[m][n].val === "x") return true;
    }
  }
  return false;
}

let grid = [
  [
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "x", count: 0 },
    { val: "o", count: 1 }
  ],
  [
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "x", count: 0 },
    { val: "o", count: 1 }
  ],
  [
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "x", count: 0 },
    { val: "o", count: 1 }
  ],
  [
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "x", count: 0 },
    { val: "o", count: 1 }
  ],
  [
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "x", count: 0 },
    { val: "o", count: 1 }
  ],
  [
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "o", count: 1 },
    { val: "x", count: 0 },
    { val: "o", count: 1 }
  ]
];

// function getSizedGrid(grid) {
//   let l = -1;
//   while (l !== getSize(grid)) {
//     l = getSize(grid);
//   }
//   return { grid: grid, size: l };
// }

// function getSize(grid) {
//   return countSurroundingOs(grid).reduce(
//     (acc, cv) =>
//       acc > Math.max(...cv.map(el => el.count))
//         ? acc
//         : Math.max(...cv.map(el => el.count)),
//     0
//   );
// }

// function countSurroundingOs(grid) {
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       let square = grid[i][j];
//       let len = square.count;
//       if (square.val === "x") {
//         // do nothing
//       } else {
//         if (
//           !(
//             i - len < 0 ||
//             i + len >= grid.length ||
//             j - len < 0 ||
//             j + len >= grid[i].length
//           ) &&
//           !surroundingsIncludeXs(grid, i, j, len)
//         ) {
//           len += 1;
//           grid[i][j] = { val: square.val, count: len };
//         }
//       }
//     }
//   }
//   return grid;
// }

export { generateTestGrids };
