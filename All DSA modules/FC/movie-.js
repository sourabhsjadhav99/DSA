let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Define your class here
// your class name should be 'Movie' and  method name as 'run'
class Movie{
	constructor(lengthInMinutes, numCharacters, language){
	this.languages=language
	this.num_characters=numCharacters
	this.length_in_minutes	=lengthInMinutes
	}
	run(){
		let x= "This is a " + this.languages + " movie with " + this.num_characters + " characters and is " + this.length_in_minutes+ " minutes long."
        return x;
	}
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE

let language = readLine();
let numCharacters = parseInt(readLine());
let lengthInMinutes = parseInt(readLine());

let movie =  new Movie(lengthInMinutes, numCharacters, language)
console.log(movie.run());


