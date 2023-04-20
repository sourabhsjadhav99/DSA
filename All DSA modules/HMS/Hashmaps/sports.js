let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
length=parseInt(readLine());
let input_arr=[]
for(let i=0;i<length;i++){
    input_arr.push(readLine().split(" "))
  
}
//console.log(input_arr);
let userFavSportMap = new Map();
let sportVoteMap = new Map();
for (let arr of input_arr) {
    let user = arr[0];
    let sport = arr[1];
    if (userFavSportMap.has(user)) {
        // We have already met this person so don't count his/her vote again
    } else {
        userFavSportMap.set(user, sport);
        if (sportVoteMap.has(sport)) {
            let existingVotes = sportVoteMap.get(sport);
            sportVoteMap.set(sport, existingVotes + 1);
        } else {
            sportVoteMap.set(sport, 1);
        }
    }
}
highestCount = 0;
mostPopularGame = "";
for (let [sport, votes] of sportVoteMap) {
    if (votes == highestCount) {
        if (mostPopularGame > sport) {
            mostPopularGame = sport;
        } else {
            mostPopularGame = mostPopularGame;
        }
    }
    if (votes > highestCount) {
      mostPopularGame = sport;
      highestCount = votes;
    }
}
console.log( mostPopularGame);
console.log(sportVoteMap.get('football'));