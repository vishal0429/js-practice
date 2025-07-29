//Write code to return the first non-repeating (unique) number in the array.
//Don't use .filter() or .find() .

function findFirstUnique(arr){
    let res ;
    for(let i = 0; i < arr.length; i++){
        let count = 0;
        for(let j = 0; j < arr.length; j++){
            if(arr[i] === arr[j]) count++;
        }
        if(count === 1) {
            res = arr[i];
            break;
        }
        else{
            res = null
        }   
    }
    return res;
}

const numbers = [3, 5, 8, 5, 3, 8, 9, 10];
const result = findFirstUnique(numbers);
console.log(result);