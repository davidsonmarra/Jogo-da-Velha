// Interface entre a lógica do jogo e o JS
document.addEventListener('DOMContentLoaded', () => { // garante que a página foi carregada
    let squares = document.querySelectorAll(".square"); // pega todos os squares do HTML
    squares.forEach((square) => { // varre esses squares e coloca um evento em cada square
        square.addEventListener('click', handleClick); // quando clicamos a handleClick() é chamada
    })
})

function handleClick(event){ 

    console.log(event.target);
    let square = event.target; // square é o elemento que foi clicado
    let position = square.id; // position é o id do square

   
    if(handleMove(position)){ // função em game.js que retorna o gameOver
        // só entrará nesse if quando o jogador perder

        setTimeout(() => { // devemos criar um setTImeout porque o alert deve ser disparado depois de efetuar a jogada
            alert(`O Jogo acabou. O Player ${playerTime} venceu.`);
        }, 10);
    
    // como usamos no index.html a interface.js depois do game.js podemos usar as funções e variáveis dele

        criaBotao();
        console.log(botao);
    }
    updateSquare(position); // atualiza os squares sempre que um é clicado    
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}

criaBotao = () => {
    botao = document.getElementById("botao");
    botao.innerHTML = "<button id='reiniciar'>Reiniciar</button>";
}

let botao = document.getElementById("botao");
botao.addEventListener('click', () => {
    document.location.reload(true);
})

