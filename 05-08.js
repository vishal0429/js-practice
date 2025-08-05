var maximumCount = function (nums) {
  let count = {
    neg: 0,
    pos: 0,
  };

  for (let num of nums) {
    if (num > 0) count.pos++;
    else if(num < 0) count.neg++;
  }
  return count.pos > count.neg ? count.pos : count.neg;
};

let nums = [-3,-2,-1,0,0,1,2];
let result = maximumCount(nums);
console.log(result);

function sumOfString(input){
    let arr = input.trim().split(" ");
    let result = parseInt(arr[0]);
    if(isNaN(result)) return "Invalid first number";
    let i = 1;
    while(i !== arr.length){
        let nextNum = parseInt(arr[i + 1]);
    if (isNaN(nextNum)) return `Invalid number: "${arr[i + 1]}"`;

    switch (arr[i]) {
      case "+":
        result = result + nextNum;
        break;
      case "-":
        result = result - nextNum;
        break;
      case "*":
        result = result * nextNum;
        break;
      case "/":
        result = result / nextNum;
        break;
      default:
        return `Invalid operator: "${arr[i]}"`;
    }
    i += 2;
  }

  return result;
}


let input = "45 + 12";
let result1 = sumOfString(input);
console.log(result1);