let UserScore = 0;
let CompScore = 0;
const UserScore_span = document.getElementById("user-score");
const CompScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".Result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choice = ['r', 'p', 's'];
    const RandomNumber = Math.floor(Math.random() * 3);
    return choice[RandomNumber];
}

function game(userchoice) {

    const computerchoice = getComputerChoice();

    switch (userchoice + computerchoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userchoice, computerchoice);
            break;
        case "pr":
        case "rp":
        case "ps":
            lost(userchoice, computerchoice);
            break;

        case "pp":
        case "rr":
        case "ss":
            draw(userchoice, computerchoice);
            break;
    }
}

function ConvertToWord(letter)
{
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissor";
}

function win(userchoice, computerchoice)
{
    UserScore++;
    UserScore_span.innerHTML= UserScore;
    CompScore_span.innerHTML= CompScore;
    const UserChoice_div= document.getElementById(userchoice);
    const smallUserWord= "user".fontsize(3).sup();
    const smallCompWord= "Comp".fontsize(3).sup();
    
    result_p.innerHTML= ConvertToWord(userchoice) + smallUserWord+ "  " + "beats" +" " +ConvertToWord(computerchoice) + smallCompWord+ "  " + "You Win..";
    UserChoice_div.classList.add('green-glow');
    setTimeout(function() { UserChoice_div.classList.remove('green-glow')},500);
}

function lost(userchoice, computerchoice)
{
    const smallUserWord= "user".fontsize(3).sup();
    const smallCompWord= "Comp".fontsize(3).sup();
    const UserChoice_div= document.getElementById(userchoice);
    CompScore++;
    UserScore_span.innerHTML= UserScore;
    CompScore_span.innerHTML= CompScore;
   
    result_p.innerHTML= ConvertToWord(userchoice) + smallUserWord+ "  " + "lose" +" " +ConvertToWord(computerchoice) + smallCompWord+ "  " + "You Loose..";
    UserChoice_div.classList.add('red-glow');
    setTimeout(function() { UserChoice_div.classList.remove('red-glow')},500);
}


function draw(userchoice, computerchoice)
{
    const smallUserWord= "user".fontsize(3).sup();
    const smallCompWord= "Comp".fontsize(3).sup();
    const UserChoice_div= document.getElementById(userchoice);
    result_p.innerHTML= ConvertToWord(userchoice) + smallUserWord+ "  " + "Equal" +" " +ConvertToWord(computerchoice) + smallCompWord+ "  " + "It's draw...";
    UserChoice_div.classList.add('gray-glow');
    setTimeout(function() { UserChoice_div.classList.remove('gray-glow')},500);
}

function main() {
    rock_div.addEventListener("click", function () {
        game("r");
    })

    paper_div.addEventListener("click", function () {
        game("p");
    })

    scissor_div.addEventListener("click", function () {
        game("s");
    })
}

main()

