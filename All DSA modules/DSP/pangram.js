function pangrams(s) {
  let final = Array.from(
    new Set(
      s
        .toLowerCase()
        .split(" ")
        .join("")
        .split("")
        .sort(function (a, b) {
          return a === b ? 0 : a < b ? -1 : 1;
        })
    )
  );
  console.log("final: ", final.length);

  if (final.length === 26) {
    return "pangram";
  } else {
    return "not pangram";
  }
}

let input1 = "We promptly judged antique ivory buckles for the next prize"; // yes
let input2 = "We promptly judged antique ivory buckles for the prize"; // no

pangrams(input1);
