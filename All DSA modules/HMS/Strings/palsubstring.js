let str = "erhabacabacd";
if (str.length < 1 || str === null) return "";
let longest = ""
for (i = 0; i < str.length; i++) {
    let odd = expand(str, i, i);
    let even = expand(str, i - 1, i);
    if (odd.length > longest.length) {
        longest = odd;
    }
    if (even.length > longest.length) {
        longest = even;
    }
}
function expand(str, left, right) {
    let i = 0;
    while (str[left - i] && str[left - i] === str[right + i]) {
        i++;
    }
    i--;
    return str.slice(left - i, right + i + 1)
}
console.log(longest);


