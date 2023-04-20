function longestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    let charMap = new Map();
    let longestSubstr = "";
    
    for (let end = 0; end < s.length; end++) {
      let currentChar = s[end];
      
      if (charMap.has(currentChar) && charMap.get(currentChar) >= start) {
        start = charMap.get(currentChar) + 1;
      }
      
      charMap.set(currentChar, end);
      let currentLength = end - start + 1;
      
      if (currentLength > maxLength) {
        maxLength = currentLength;
        longestSubstr = s.substring(start, end + 1);
      }
    }
    
    return longestSubstr;
  }
  
  let s = "abcabcbb";
  let longest = longestSubstring(s);
  
  console.log(longest);