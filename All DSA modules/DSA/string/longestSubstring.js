function longestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    let charMap = new Map();
    let longestSubstr = "";
    
    for (let index = 0; index < s.length; index++) {
      let currentChar = s[index];
      
      if (charMap.has(currentChar) && charMap.get(currentChar) >= start) {
        start = charMap.get(currentChar) + 1;
      }
      charMap.set(currentChar, index);

      let currentLength = index - start + 1;
      
      if (currentLength > maxLength) {
        maxLength = currentLength;
        longestSubstr = s.substring(start, index + 1);
      }
    }
    
    return longestSubstr;
  }
  
  let s = "abcdabcbdb";
  let longest = longestSubstring(s);
  
  console.log(longest);