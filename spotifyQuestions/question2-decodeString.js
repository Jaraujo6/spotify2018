// The encoding rule is: k[encoded_string], 
//where the encoded_string inside the square brackets is repeated exactly k times. 
//Note: k is guaranteed to be a positive integer. 

// For s = "4[ab]", the output should be decodeString(s) = "abababab" 
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

const decodeString = s => { 
  let decodedString = ''
  let repeatVal = '0'
  for (let i = 0; i < s.length; ++i) { //O(s) time where s is the string length - closing parens
    if (s[i] !== '[') { 
      repeatVal += s[i]
    } else {
      repeatVal = Number(repeatVal)
      let newString = s.slice(i + 1, s.length - 1)
      let strToRepeat = ''
      for (let j = 0; j < newString.length; ++j) {
        if (!parseInt(newString[j], 10)) {
          strToRepeat += newString[j]
        } else {
          let subString = newString.slice(j)
          strToRepeat += decodeString(subString)
          break;
        }
      }
      decodedString = strToRepeat.repeat(repeatVal)
      return decodedString
    }
  }
}
//this function is called recursively as the encoding pattern can be nested any number of times
//O(c) space where c is the call stack depth based on the described nesting above
//the size of the call stack >> size of the output string

module.exports = decodeString
