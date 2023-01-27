# Project Overview
This project is a simple library/collection of algorithms and data structures with a very "readable" usage.

## Project structure
### notebooks folder
Contains all the algorithms and data structures
### test
Contains all test files

## How to use
To run the project you only need node.js installed on your system. Run npm install and then npm start to initialize it. Here's a simple example of usage of the libraries.

```javascript
import { Search } from "./notebooks/algorithms/search";
import { Sort } from "./notebooks/algorithms/sorting";
import { Util } from "./notebooks/algorithms/util";

const main = () => {
  const values = [4, 2, 8, 11, 23, 35, 1, 3, 5];

  Sort(values).with.mergeSort();

  console.log(values);
};

main();
```
