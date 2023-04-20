let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// let code = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
// let alpha = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ");
// let map = new Map();
// for (let i = 0; i < code.length; i++) {
//     map.set(alpha[i], code[i])
// }
// let eachword;
// let eachLetter;
// let add = "";
// let input = "gin zen gig msg".split(" ");
// for (let i = 0; i < input.length; i++) {
//     eachword=input[i];

//     let wordmap= new Map();
//     for (let i = 0; i < input[i].length; i++) {
//         map.set(input[i], 'a')
//         console.log(wordmap)
//     }

//         // eachLetter = input[i][j];
//         // if (map.has(eachLetter)) {
//         //     add = add + map.get(eachLetter)
//         // }
//         console.log(eachword)

// }
let length=readLine();
for (let i=0;i<length;i++){
    var uniqueMorseRepresentations = function(words) {
        // transform to morse code function
        // iterate thru word array -. transform -> put {}
        
        function transform(string) {
            const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
            const output = []
            const input = string.split('')
            const value = {a:0, b:1, c:2, d:3, e:4, f:5, g:6, h:7, i:8, j:9, k:10, l:11,
                           m:12, n:13, o:14, p:15, q:16, r:17, s:18, t:19, u:20, v:21, 
                           w:22, x:23, y:24, z:25}
            for (let letter of input) {
                output.push(morse[value[letter]])
            }
            return output.join('')
        }
        
        transform(words[0])
        const transformCollection = {}
        for (let word of words) {
            const morseCode = transform(word)
            if (!transformCollection.hasOwnProperty(morseCode)) {
                transformCollection[morseCode] = true
            }
        }
    
        return Object.values(transformCollection).length
    }
    
    // UNIT TEST
    
    const words = readLine().split(" ");
    console.log(uniqueMorseRepresentations(words)) // => 2

}
