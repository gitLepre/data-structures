/**
 * Copy values from x[lo] to x[hi] in a second array y[]
 */
function copy(z: number[], x: number[], lo: number, hi: number) {
  let j = 0;
  for (let i = lo; i <= hi; i++) {
    x[j] = z[i];
    j += 1;
  }
}

function factorial(n: number) {
  if (n < 0) throw new Error("Input needs to be positive integer");
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

function merge(x: number[], y: number[], z: number[]) {
  const [lenX, lenY] = [x.length, y.length];
  let [i, j, k] = [0, 0, 0];

  // Sort the values, copy the lower on z[k]
  // When i or j reach the respective array limit, I stop.
  while (i < lenX && j < lenY) {
    if (x[i] <= y[j]) {
      z[k] = x[i];
      i += 1;
    } else {
      z[k] = y[j];
      j += 1;
    }
    k += 1;
  }

  // Copy any remaining values
  if (i === lenX) {
    while (j < lenY) {
      z[k] = y[j];
      j += 1;
      k += 1;
    }
  } else {
    while (i < lenX) {
      z[k] = x[i];
      i += 1;
      k += 1;
    }
  }
}

function partition(x: number[], lo: number, hi: number): number {
  const a = x[hi];
  let i = lo - 1;
  for (let j = lo; j < hi; j++) {
    if (x[j] <= a) {
      i += 1;
      swap(x, i, j);
    }
  }
  swap(x, i + 1, hi);
  return i + 1;
}

function swap(x: number[], i, j) {
  const temp = x[i];
  x[i] = x[j];
  x[j] = temp;
}

function uniqueElements(x: any[]): boolean {
  const len = x.length;
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      if (x[i] === x[j]) return false;
    }
  }
  return true;
}

export const Util = {
  sorting: {
    copy: copy,
    merge: merge,
    partition: partition,
    swap: swap,
  },
  commons: {
    factorial: factorial,
    uniqueElements: uniqueElements,
  },
};
