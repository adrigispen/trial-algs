function generateTestGrids() {
  let grids = [];
  for (let i = 0; i < 10; i++) {
    let m = parseInt(Math.random() * 10) + 1; // we want at least 1 elem in each row
    let n = parseInt(Math.random() * 10) + 1; // and at least 1 in each col
    let grid = [];
    for (let j = 0; j < m; j++) {
      let temp = [];
      for (let k = 0; k < n; k++) {
        temp[k] = Math.random() * 10 < 8 ? "o" : "x";
      }
      grid[j] = temp;
    }
    grids.push({ grid: grid, size: getMaxSize(grid) });
  }
  return grids;
}

function getMaxSize(grid) {
  let max = 0;
  let maxi = 0;
  let maxj = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (countSize(grid, i, j) > max) {
        max = countSize(grid, i, j);
        maxi = i;
        maxj = j;
      }
    }
  }
  return { max, maxi, maxj };
}

function countSize(grid, i, j) {
  if (grid[i][j] === "x") return 0;
  let size = 1;
  for (let l = 1; l <= Math.min(grid.length, grid[i].length); l++) {
    // I could do a calculation to get an accurate upper bound, but it doesn't matter because we'll always hit a boundary
    if (hitBoundaryOrX(grid, i, j, l)) {
      size = l;
      break;
    } else {
      size++;
    }
  }
  return size;
}

function hitBoundaryOrX(grid, i, j, len) {
  for (let m = i; m <= i + len; m++) {
    for (let n = j; n <= j + len; n++) {
      if (n >= grid[i].length || m >= grid.length) return true;
      if (grid[m][n] === "x") return true;
    }
  }
  return false;
}

export { generateTestGrids };
