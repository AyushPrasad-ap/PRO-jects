const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector('.statusText');
const restartBtn = document.querySelector('.restartBtn');

let clickCount = 0;
let running = true;
let arrayX=[], arrayO=[];
const winConditions = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
];

cells.forEach(cell => {
    cell.addEventListener('click',()=>{
        if(clickCount%2==0 && cell.textContent=='' && running){
            statusText.textContent = `O's turn`;
            cell.textContent = 'X';
            clickCount+=1;
            arrayX.push(Number(cell.getAttribute('cellIndex')));
            checkWinner();
        }
        else if(cell.textContent=='' && running){
            statusText.textContent = `X's turn`;
            cell.textContent ='O';
            clickCount+=1;
            arrayO.push(Number(cell.getAttribute('cellIndex')));
            checkWinner();
        }
    });
});

function checkWinner(){
    winConditions.forEach(condition => {        //outer loop    iterate 8 times
        let a=0, b=0;
        condition.forEach(element => {          //inner loop    iterate 3 times
            if(arrayX.indexOf(element)>=0)   a+=1;
            if(arrayO.indexOf(element)>=0)   b+=1;
        });
        if(a==3){
            statusText.textContent = `X Wins!`;
            arrayX=[];
            arrayO=[];
            running = false;
        }
        else if(b==3){
            statusText.textContent = `O Wins!`;
            arrayX=[];
            arrayO=[];
            running = false;
        }
        if(running && arrayX.length==5){
            statusText.textContent = `Draw!`;
        }
    });
}

restartBtn.addEventListener('click',()=>{
    cells.forEach(cell => {
        cell.textContent = '';
        arrayX=[];
        arrayO=[];
        running = true;
        statusText.textContent = `X's turn`;
        clickCount = 0;
    });
});

