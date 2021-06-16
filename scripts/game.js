// LÓGICA DO JOGO - Regra do negócio
// iniciar minhas variáveis
let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0; // 0 ou 1 -> player 1 ou player 2
let symbols = ['o', 'x'];
let gameOver = false;

const winStates = [ // todas as possibilidades de vitória
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function handleMove(position){ // faz o movimento de um player
    if(gameOver){ // se gameover for verdadeiro não deixa jogar
        return;
    }

    if(board[position] == ''){ // só atualiza o array caso a posição não tenha símbolo
        board[position] = symbols[playerTime]; // a posição é passada como um argumento
        // a posição correspondente ao id recebe o símbolo correspondente ao jogador

        gameOver = isWin(); // verifica se houve um vencedor
        if(gameOver == false){ // ele só troca de jogador se o jogo não tiver acabado
            if(playerTime == 0) // se o jogador for 0 ao final da jogada é a vez do 1
                playerTime = 1;
            else // se o jogador for 1 ao final do jogo é vez do 0 
                playerTime = 0;
        }
    }
    return gameOver;
}

function isWin() {
    
    for(let i = 0; i < winStates.length; i++){
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        
        if (board[pos1] == board[pos2] && 
            board[pos1] == board[pos3] && 
            board[pos1] != ''){
            return true; // se todos forem verdadeiros o true é retornado
        }
    }
    return false;
}