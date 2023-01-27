/**
 * 
Se c'è il numero che cerco, tornerò l'indice m perchè x[m] === key
Se non c'è, per forza mi troverò in uno dei due if, perchè la chiave sarà sempre
o maggiore o minore di quella cercata (non essendo nell'array).
Arriverò dunque a un punto in cui il while termina perchè lo > hi e torno -1
 */
function binarySearch(x: number[], key: number) {
  let lo = 0;
  let hi = x.length - 1;

  while (lo <= hi) {
    const m = lo + Math.floor((hi - lo) / 2);
    if (key < x[m]) hi = m - 1;
    else if (key > x[m]) lo = m + 1;
    else return m;
  }
}

function sequentialSearch(x: number[], key: number) {
  let i = 0;
  const len = x.length;
  while (i < len && x[i] != key) {
    i += 1;
  }
  if (i < len) return i;
  return -1;
}

export const Search = {
  with: {
    sequentialSearch: sequentialSearch,
  },
};
