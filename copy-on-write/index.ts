// add element last

const splice = (array: string[], index: number): string[] => {
  const copy_array = array.slice();
  for (let i = 0; i < array.length; i++) {
    if (i === index) {
      copy_array.splice(i, 1);
      break;
    }
  }
  return copy_array;
};

const push = (array: string[], element: string): string[] => {
  const copy_array = array.slice();
  copy_array.push(element);
  return copy_array;
};

// removes last element, returns it.
const pop = (array: string[]): number => {
  const copy_array = array.slice();
  return copy_array.push();
};

// shift [ returns first element, deletes first element ]
const shift = (array: string[]): [string, string[]] => {
  const copy_array = array.slice();
  const first_element = copy_array[0];
  const drop_first = splice(copy_array, 0);

  return [first_element, drop_first];
};

// array set
const array_set = (array: string[], index: number, value: string) => {
  const copy_array = array.slice();
  copy_array[index] = value;
  return copy_array;
};

// object set
const object_set = (obj: {}, key: string, value: string) => {
  const copy = obj.assign({}, obj);
  copy[key] = value;
  return copy;
};
