var word = "";
var guess_word = "";

function takeWord() {
    word = document.getElementById("in_word").value;
    word = word.toLowerCase();
    document.getElementById("in_word").value = "";
    for (let i = 0; i < word.length; ++i) {
        guess_word += "-";
    }
    document.getElementById("new_word").innerHTML = guess_word;
    document.getElementById("explanation").innerHTML = "HERE WILL BE THE GUESSED WORD";
}

String.prototype.replaceAt = function (index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

let test = 0;
function checkLetter() {
    if (test < 9) {
        let letter = document.getElementById("in_letter").value;
        document.getElementById("in_letter").value = "";
        document.getElementById("letterExists").innerHTML = "";
        if (guess_word.search(letter) >= 0) {
            document.getElementById("letterExists").innerHTML = "The letter already exists. Please choose another letter."; 
        }
        let flag = 0;
        for (let i = 0; i < word.length; ++i) {
            if (word[i] === letter) {
                document.getElementById("explanation").innerHTML = " ";
                let change = guess_word.replaceAt(i, letter);
                guess_word = change;
                flag = 1;
            } 
        }
        if (flag === 0) {
            ++test;
            let moove = 10 - test;
            document.getElementById("explanation").innerHTML = "Wrong choice. Please insert a new letter. There are " + moove + " more attempts.";
            let image = document.getElementById("image");
            image.src = "hgmpic\\" + test + ".jpg";
        }
        document.getElementById("new_word").innerHTML = guess_word;
        if (word.localeCompare(guess_word) == 0) {
            document.getElementById("new_word").innerHTML = "CONGRATULATIONS! YOU WINN!!!";
            btn = document.createElement("button");
            btn.innerHTML = "Play again!";
            document.getElementById("explanation").innerHTML = "";
            document.getElementById("explanation").appendChild(btn);
            btn.onclick = function () {
                document.location.reload();
            }
        }
    } else {
        document.getElementById("letterExists").innerHTML = "";
        document.getElementById("new_word").innerHTML = "Sorry. You are lost. Please play again!";
        btn = document.createElement("button");
            btn.innerHTML = "Play again!";
            document.getElementById("explanation").innerHTML = "";
            document.getElementById("explanation").appendChild(btn);
            btn.onclick = function () {
                document.location.reload();
            }
    }
}
