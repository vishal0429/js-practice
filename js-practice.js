// const sumExceptSelf = (arr) => {
//   let result = [];
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = sum - arr[i];
//   }
//   return result;
// };

// const arr = [1, 2, 3, 4];
// const result = sumExceptSelf(arr);
// console.log(result);

const secondLargest = (arr) => {
  let largestNumber = 0;
  let secondLarget = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= largestNumber) {
      secondLarget = largestNumber;
      largestNumber = arr[i];
    }
    else if(arr[i] > secondLargest &&  ){
  }
};

const arr = [1, 2, 3, 4];
const result = secondLargest(arr);
console.log(result);
