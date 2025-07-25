var maxSum = function(nums) {
   if(!nums.length) return;
    let uniquie = [...new Set(nums)];
    
    let positive = uniquie.filter(num => num > 0);
    
    if(positive.length > 0){
        return positive.reduce((sum, val)=> sum + val,0)
    }
    else{
        return Math.max(...uniquie);
    }
};