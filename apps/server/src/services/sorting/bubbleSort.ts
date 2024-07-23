type CompareFunction = (a: number, b: number) => boolean;

export const bubbleSort = (arr: number[], order: 'asc' | 'dsc'): number[] => {
  const len = arr.length;
  let temp: number;
  let swapped: boolean;

  // Determine the comparison function based on the order
  const compare: CompareFunction =
    order === 'asc' ? (a, b) => a > b : (a, b) => a < b;

  for (let i = 0; i < len; i++) {
    swapped = false;
    for (let j = 0; j < len - i - 1; j++) {
      if (compare(arr[j], arr[j + 1])) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
};
