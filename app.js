// Functions Exercises

// Minimum

function min(a, b){
    return a < b ? a : b;
}

console.log(min(0, 10));
console.log(min(0, -10));

// Recursion

function isEven(num){
    switch(num){
        case 0:
            return true;
            break;
        case 1:
            return false;
            break;
        default:
            return isEven(num-2);
            break;
    }    
}

console.log(isEven(50));
console.log(isEven(75));

// Bean counting

function countBs(str){
    let j = '';
    for(let i = 0; i < str.length; i++){
        str[i] === 'B' ? j++ : null;
    }
    return j;
}   

console.log(countBs("BBC"));
