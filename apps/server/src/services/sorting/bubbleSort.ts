type CompareFunction = (a: number, b: number) => boolean;

type Steps = {
  array: number[];
  comparing: [number, number] | null;
  swapping: [number, number] | null;
};

export const bubbleSort = (arr: number[], order: 'asc' | 'dsc'): Steps[] => {
  const steps: Steps[] = [];
  const len = arr.length;
  let temp: number;
  let swapped: boolean;

  // Determine the comparison function based on the order
  const compare: CompareFunction =
    order === 'asc' ? (a, b) => a > b : (a, b) => a < b;

  // Record initial state
  steps.push({ array: [...arr], comparing: null, swapping: null });

  for (let i = 0; i < len; i++) {
    swapped = false;
    for (let j = 0; j < len - i - 1; j++) {
      // Record comparison
      steps.push({ array: [...arr], comparing: [j, j + 1], swapping: null });

      if (compare(arr[j], arr[j + 1])) {
        // Record swap
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        swapped = true;
        steps.push({ array: [...arr], comparing: null, swapping: [j, j + 1] });
      }
    }
    if (!swapped) {
      break;
    }
  }

  // Record final state
  steps.push({ array: [...arr], comparing: null, swapping: null });

  return steps;
};
