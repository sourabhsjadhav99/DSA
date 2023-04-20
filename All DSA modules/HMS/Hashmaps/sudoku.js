var solveSudoku = function(board) {
    for(let i=0; i<board.length; i++) {
    for(let j=0; j<board[0].length; j++){
        if(board[i][j]==".") {
            for(let c=1; c<=9; c++) {
                if(isValid(board, i, j, c)=="True") {
                    board[i][j] = c.toString();
                    if(solveSudoku(board)=="True") {
                        return "True";
                    }
                    else {
                        board[i][j] = ".";
                    }
                }
            }
            return "False";
        }
    }
}
return "True";
function isValid(board, row , col, c) {
for(let i=0; i<9; i++) {
    if (board[i][col]==c) {
        return "False";
    }
    if(board[row][i]==c) {
        return "False";
    }
    if(board[3 * parseInt(row/3) + parseInt(i / 3)][3 * parseInt(col / 3) + i% 3] == c) {
        return "False";
    }
}
return "True";
}
};
let board = [];
for (let i=0; i<9; i++) {
    let input = readLine().trim().split(" ");
    board.push(input);
}
console.log(solveSudoku(board))