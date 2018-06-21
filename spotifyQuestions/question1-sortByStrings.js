//Sort the letters in the string s by the order they occur in the string t. 
//You can assume t will not have repetitive characters. 
//For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". 
//For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

const sortByStrings = (s, t) => {
  const sCharCount = {} //O(s) space
  let output = '' //O(s) space worst case
  for (let i = 0; i < s.length; ++i) { // O(s) time
    if (!sCharCount[s[i]]) {
      sCharCount[s[i]] = s[i]
    } else {
      sCharCount[s[i]] += s[i]
    }
  }
  for (let j = 0; j < t.length; ++j) { // O(t) time
    if (sCharCount[t[j]]) {
      output += sCharCount[t[j]]
    }
  }
  return output // O(s + t) time, O(s) space
}

module.exports = sortByStrings
