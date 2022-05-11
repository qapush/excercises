// lettersum("") => 0
// lettersum("a") => 1
// lettersum("z") => 26
// lettersum("cab") => 6
// lettersum("excellent") => 100
// lettersum("microspectrophotometries") => 317

function lettersum(text){
    const az = 'abcdefghijklmnopqrstuvwxyz';
    
    let sum = 0;

    for (let i = 0; i < text.length; i++) {
        sum += az.indexOf(text[i]) + 1;
        console.log(text[i])
    }
    console.log(sum)
    return sum;
}

lettersum('excellent');