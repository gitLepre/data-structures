import { Util } from "./util";

/**
 * Best case is O(n), works really well on "almost sorted" arrays.
 * The best scenario then is to sort with mergeSort or quickSort and then keep
 * the array sorted with this algorithm.
 */
function insertionSortStraight(x: number[]) {
  const len = x.length;
  for (let i = 1; i < len; i++) {
    let v = x[i];
    let j = i - 1;
    while (j >= 0 && x[j] > v) {
      x[j + 1] = x[j];
      j -= 1;
    }
    x[j + 1] = v;
  }
}

/**
 * Recursively divide the array into two parts until you obtain two arrays of length 1
 * and then start merging them in the correct order with the merge() function.
 */
function mergeSort(z: number[]) {
  // z[] is the array I want to sort, x and y are two support arrays
  const lenZ = z.length;
  if (lenZ > 1) {
    const lenX = Math.floor(lenZ / 2);
    const lenY = lenZ - Math.floor(lenZ / 2);
    const x: number[] = new Array(lenX); // len 1
    const y: number[] = new Array(lenY); // len2
    Util.sorting.copy(z, x, 0, Math.floor(lenZ / 2) - 1); // da 0 a 0
    Util.sorting.copy(z, y, Math.floor(lenZ / 2), lenZ - 1); // 1 a 2
    mergeSort(x);
    mergeSort(y);
    Util.sorting.merge(x, y, z);
  }
}

function permutationSort() {
  // Useless
}

function quickSort(x: number[], lo: number = 0, hi: number = x.length - 1) {
  if (lo < hi) {
    const s = Util.sorting.partition(x, lo, hi);
    quickSort(x, lo, s - 1);
    quickSort(x, s + 1, hi);
  }
}

function selectionSort(x: number[]) {
  const len = x.length;

  let min = 0;
  for (let i = 0; i < len - 1; i++) {
    min = i;
    for (let j = i + 1; j < len; j++) if (x[j] < x[min]) min = j;
    Util.sorting.swap(x, i, min);
  }
}

export const Sort = (x: number[]) => {
  return {
    with: {
      insertionSortStraight: insertionSortStraight.bind(null, x),
      mergeSort: mergeSort.bind(null, x),
      quickSort: quickSort.bind(null, x),
      selectionSort: selectionSort.bind(null, x),
    },
  };
};
