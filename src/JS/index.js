const setaAvancar = document.querySelector('.btn-avancar');
const setaVoltar = document.querySelector('.btn-voltar');
const JojoCards = document.querySelectorAll('.cartao');
let cardAtual = 0;

setaAvancar.addEventListener('click', () =>{
  console.log('cardAtual',cardAtual);
  console.log('JojoCards',JojoCards.length-1);

  if(cardAtual === JojoCards.length-1)return;
   
  console.log('IÇAA!!!')

  cardAtual++;
  console.log(JojoCards[cardAtual].classList.add('selecionado'));

  const cartaoSelecionado = document.querySelector('.selecionado');
   cartaoSelecionado.classList.remove('selecionado');
   console.log(cartaoSelecionado);

})

setaVoltar.addEventListener('click', ()=>{
   
    if(cardAtual === 0)return;
    
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');


    cardAtual--;
    console.log(cardAtual);
    JojoCards[cardAtual].classList.add('selecionado');

})