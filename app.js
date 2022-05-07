const reverseString = (str) => {
    let result = '';
    for (let i = str.length - 1 ; i >= 0; i--){
        result += str[i];
    }
    return result;
}

const clearString = (str) => {
    let result = '';
    const regex = /[a-z0-9]/gi
    const clearArr = str.match(regex);
    clearArr.forEach(item => {
        result += item.toLowerCase();
    })
    return result;
}

function palindrome(str) {
    return clearString(str) == reverseString(clearString(str));
}

palindrome("1 eye for of 1 eye.")