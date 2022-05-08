function telephoneCheck(str) {
    const splitRegex = /[^\d\(\)]/
    const clearedString = str.split(splitRegex)
        .join('')
    console.log(clearedString)
    const reg = //
    // console.log(reg.test(clearedString))
    // return reg.test(clearedString);
}
  
// telephoneCheck("1 555-555-5555")
// telephoneCheck("555-555-5555");
// telephoneCheck("123**&!!asdf#")
// telephoneCheck("1(555)555-5555")

telephoneCheck("2 (757) 622-7382")
telephoneCheck("(6054756961)")
telephoneCheck("1 555-555-5555")