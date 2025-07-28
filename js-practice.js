const sumExceptSelf = (arr) => {
  let result = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    result[i] = sum - arr[i];
  }
  return result;
};

const arr = [1, 2, 3, 4];
const result1 = sumExceptSelf(arr);
console.log(result1);

const secondLargestFun = (arr) => {
  let largestNumber = 0;
  let secondLarget = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      secondLarget = largestNumber;
      largestNumber = arr[i];
    } else if (arr[i] > secondLarget && arr[i] !== largestNumber) {
      secondLarget = arr[i];
    }
  }
  return secondLarget;
};

const result2 = secondLargestFun(arr);
console.log(result2);
