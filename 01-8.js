function countVowelsAndConsonants(input) {
   let result = {
       vowels: 0,
       consonants: 0
   }
   let check = "aeiouAEIOU";
   
   for(let i = 0; i < input.length; i++){
       if(/[a-zA-Z]/.test(input[i])){
       if(check.includes(input[i])){
           result.vowels++;
       }else{
          result.consonants ++;
       }
       }
   }
   return result;
}


var twoSum = function(nums, target) {
    if(nums.length < 2) return null;
    let result = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                result.push(i, j)
                return result;
            }
        }
    }
    return result;
};