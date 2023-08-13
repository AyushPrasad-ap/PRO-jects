let player = document.querySelector('.player');
let computer = document.querySelector('.computer');
let result = document.querySelector('.result');

const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorsBtn = document.querySelector('.scissorsBtn');

let computerChoice;
let options = [' Rock', ' Paper', ' Scissors'];

function random(){
    computerChoice = Math.floor(Math.random()*3);
}

rockBtn.addEventListener('click', () =>{
    random();
    player.innerHTML = 'Player :' + `<i>${options[0]}</i>`;
    computer.innerHTML = 'Computer :' + `<i>${options[computerChoice]}</i>`;
    result.innerHTML = 'Result :' + gameResult(0, computerChoice);
});

paperBtn.addEventListener('click', () =>{
    random();
    player.innerHTML = 'Player :' + `<i>${options[1]}</i>`;
    computer.innerHTML = 'Computer :' + `<i>${options[computerChoice]}</i>`;
    result.innerHTML = 'Result :' + gameResult(1, computerChoice);
});

scissorsBtn.addEventListener('click', () =>{
    random();
    player.innerHTML = 'Player :' + `<i>${options[2]}</i>`;
    computer.innerHTML = 'Computer :' + `<i>${options[computerChoice]}</i>`;
    result.innerHTML = 'Result :' + gameResult(2, computerChoice);
});

function gameResult(playerOpt, computerOpt){
    switch(playerOpt){
        case 0:
            switch(computerOpt){
                case 0: 
                        return ` Tie`;
                        break;
                case 1:
                        return ` You Lose!`;
                        break;
                case 2:
                        return ` You Win!`;
                        break;
            }
            break;
        case 1:
            switch(computerOpt){
                case 0:
                        return ` You Win!`;
                        break;
                case 1:
                        return ` Tie`;
                        break;
                case 2:
                        return ` You Lose!`;
                        break;
            }
            break;
        case 2:
            switch(computerOpt){
                case 0:
                        return ` You Lose!`;
                        break;
                case 1:
                        return ` You Win!`;
                        break;
                case 2:
                        return ` Tie`;
                        break;
            }
            break;
    }
}