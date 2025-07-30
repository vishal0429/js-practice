//problem 1
let arr = [2, 1, 2, 2, 6, 2, 4, 9, 1, 5];
let target = 2;

function removeEle(arr, target) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== target) {
      arr[i] = arr[j];
      i++;
    }
  }
  arr.length = i;
  return arr;
}

const result1 = removeEle(arr, target);
console.log(result1);

//problem 2
function findMax(arr) {
  if (arr.length === 0) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

const result2 = findMax(arr);
console.log(result2);

//problem 3
function revArray(arr) {
  if (arr.length === 0) return null;
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return arr;
}

const result3 = revArray(arr);
console.log(result3);

//problem 4
function palindrome(input) {
  let i = 0;
  let j = input.length - 1;
  while (i < j) {
    if (input[i] !== input[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(palindrome("madam"));

//problem 5
function findFirstDuplicate(arr) {
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      return arr[i];
    } else {
      seen[arr[i]] = true;
    }
  }
}
const result4 = findFirstDuplicate(arr);
console.log(result4);

//problem 6
function findFirstDuplicate(arr) {
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      seen[arr[i]] = seen[arr[i]] + 1;
    } else {
      seen[arr[i]] = 1;
    }
  }
  return seen;
}

const result5 = findFirstDuplicate(arr);
console.log(result5);
