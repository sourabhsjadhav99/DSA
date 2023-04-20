var ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
var tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]


function numToWord(num, s) {
    let n = parseInt(num)
    let str = ""
    if (n > 19) {
        if(ones[n % 10]){
            str = str + tens[parseInt(n / 10)] + "-" + ones[n % 10]
        }else{
            str = str + tens[parseInt(n / 10)]  + ones[n % 10]
        }
        


    } else {
        n = parseInt(n)
        str = str + ones[n]

    }
    if (n) {
        str = str + s
    }
    return str

}

function convertToWords(n) {
    let result
    if (n > 0 && n < 999999999) {

        if (n < 10) {
            return ones[n]
        }

        result ? result = result + numToWord((n / 10000000), " crore ") : result = numToWord((n / 10000000), " crore ")

        result ? result = result + numToWord((n / 100000) % 100, " lakh ") : result = numToWord((n / 100000) % 100, " lakh ")

        result ? result = result + numToWord((n / 1000) % 100, " thousand ") : result = numToWord((n / 1000) % 100, " thousand ")
        result ? result = result + numToWord((n / 100) % 10, " hundred ") : numToWord((n / 100) % 10, " hundred ")


        if (n > 100 && parseInt(n) % 100) {
            if(n>=100 && n<1000){
                let div = parseInt(n/100)
                result= ones[div] +" hundred " +result + "and "
            }
            result = result + "and "
        }
        result = result + numToWord((parseInt(n) % 100), "")
        return result
    } else{
        return "enter valid number"

    }

}

let given_number=4562
console.log(convertToWords(given_number))