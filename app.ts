import { Search } from "./notebooks/algorithms/search";
import { Sort } from "./notebooks/algorithms/sorting";
import { Util } from "./notebooks/algorithms/util";

const main = () => {
  const values = [4, 2, 8, 11, 23, 35, 1, 3, 5];

  Sort(values).with.mergeSort();

  console.log(values);
};

main();
