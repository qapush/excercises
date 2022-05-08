const getRoman = (num, order) => {
    const nr = +num;
    switch (nr) {
        case 1:
            switch (order) {
                case 0:
                    return 'I'
                case 1:
                    return 'X'
                case 2:
                    return 'C'
                case 3:
                    return 'M'
                default:
                    break;
            }
        case 2:
            switch (order) {
                case 0:
                    return 'II'
                case 1:
                    return 'XX'
                case 2:
                    return 'CC'
                case 0:
                    return 'MM'
                default:
                    break;
            }
        case 3:
            switch (order) {
                case 0:
                    return 'III'
                case 1:
                    return 'X'
                case 2:
                    return 'C'
                case 3:
                    return 'MMM'
                default:
                    break;
            }
        case 4:
            switch (order) {
                case 0:
                    return 'IV'
                case 1:
                    return 'XL'
                case 2:
                    return 'CD'
                default:
                    break;
            }
        case 5:
            switch (order) {
                case 0:
                    return 'V'
                case 1:
                    return 'L'
                case 2:
                    return 'D'
                default:
                    break;
            }
        case 6:
            switch (order) {
                case 0:
                    return 'VI'
                case 1:
                    return 'LX'
                case 2:
                    return 'DC'
                default:
                    break;
            }
        case 7:
            switch (order) {
                case 0:
                    return 'VII'
                case 1:
                    return 'LXX'
                case 2:
                    return 'DCC'
                default:
                    break;
            }
        case 8:
            switch (order) {
                case 0:
                    return 'VIII'
                case 1:
                    return 'LXXX'
                case 2:
                    return 'DCCC'
                default:
                    break;
            }
        case 9:
            switch (order) {
                case 0:
                    return 'IX'
                case 1:
                    return 'XC'
                case 2:
                    return 'CM'
                default:
                    break;
            }
    }
}

const convertToRoman = (num) => {
    let result = '';
    const str = num.toString();

    for(let i = 0, j = str.length - 1; i < str.length; i++, j--){
        result += getRoman(str[i],j)
    }
    return result;
}

convertToRoman(3999)
console.log(convertToRoman(400))