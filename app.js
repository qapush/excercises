// Write class below
class ShiftCipher{
  constructor(shift){
        this.codes = [];
        this.shiftedCodes = [];

        for (let i = 97; i <= 122; i++){
            this.codes.push(i);
        }   
      
        for (let i = 97 + shift; i <= 122; i++){
            this.shiftedCodes.push(i);
        }   
        for (let i = 97; i < 97 + shift; i++){
            this.shiftedCodes.push(i);
        }   
  }
 
  encrypt(str){
    let res = '';
    const word = str.toLowerCase();

    for (let i = 0; i < word.length; i++){
      const index = this.codes.indexOf(word.charCodeAt(i));

      if (index === -1) {
        res += word[i];
      } else {
        res += String.fromCharCode(this.shiftedCodes[index]).toUpperCase();
      }
    }
    return res;
  }

  decrypt(str){
    let res = '';
    const word = str.toLowerCase();

    for (let i = 0; i < word.length; i++){
      const index = this.shiftedCodes.indexOf(word.charCodeAt(i));

      if (index === -1) {
        res += word[i];
      } else {
        res += String.fromCharCode(this.codes[index]);
      }
    }
    return res;
  }
}

const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('I love to code!')); // returns 'K NQXG VQ EQFG!'
console.log(cipher.decrypt('K <3 OA RWRRA')); // returns 'i <3 my puppy'

// console.log(cipher.encrypt('c')); // C


// console.log(cipher.shiftedCodes);  
