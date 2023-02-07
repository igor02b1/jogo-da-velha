const celulas = document.querySelectorAll(".quadro");
let checkturno = true;
const jogador_X = "X";
const jogador_O = "O"; 
document.addEventListener("click", (event) => {
    if(event.target.matches(".quadro")) {
        jogar(event.target.id);
    }
});

function jogar(id){
    const celula = document.getElementById(id);
    turno = checkturno ? jogador_X : jogador_O;
    celula.textContent = turno;
    checkturno = !checkturno;
    checarVencedor(turno);
}
