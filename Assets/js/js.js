const btn = document.querySelector('#calcGorjeta');
const cnt = document.querySelector('#content-bill');
const stars = document.querySelectorAll('.starImg');
const bill = document.getElementById('content-bill');
var conta = document.getElementById('conta');
var classifica = 0;
var pessoas = document.getElementById('pessoas')

stars.forEach(star => {
    star.addEventListener('click', () => {
        console.log(star.id);
        const selStar = star.id;
        const selStarIndex = parseInt(selStar.replace('star_', ''));
        classifica = selStarIndex;
        for (let i=0; i < stars.length; i++)
        {
            const idStar = stars[i].id;
            const idStarIndex = parseInt(idStar.replace('star_', ''));

            if(idStarIndex <= selStarIndex)
            {
                stars[i].src = "./Assets/Imagem/star_gold.png"
            }
            else
            {
                stars[i].src = "./Assets/Imagem/star.png"
            }
        }
    });
});


btn.addEventListener('click', ()=>{
    let contaT = conta.value;
    let contaF = parseFloat(contaT).toFixed(2);
    let pessoaT = pessoas.value;
    let porc = [5, 10, 15, 20, 30];
    let gorjeta = contaT * (porc[classifica - 1] / 100);
    let gorjetaF = parseFloat(gorjeta).toFixed(2);
    let pessoasP = (pessoaT > 1) ? `${pessoaT} Pessoas` : '1 Pessoa';
    let porPessoa = (parseInt(contaT) + parseInt(gorjeta)) / parseInt(pessoaT);
    let porPessoaF = parseFloat(porPessoa).toFixed(2);

    bill.innerHTML = `
        <h1>Descrição</h1>
        <div class="desc-total">
            <h3>Valor Total:</h3>
            <h3><span id="valor-total">R$ ${contaF}</span></h3>
        </div>
        <div class="desc-total">
            <h3>Classificação do serviço:</h3>
            <h3><span id="valor-class">${classifica} Estrela / ${porc[classifica - 1]} %</span></h3>
        </div>
        <div class="desc-total">
            <h3>Quantidade de passoas:</h3>
            <h3><span id="valor-pessoas">${pessoaT} Pessoa</span></h3>
        </div>
        <div class="desc-total">
            <h3>Total gorjeta:</h3>
            <h3><span id="valor-gorjeta">R$ ${gorjetaF}</span></h3>
        </div>
        <div class="desc-total">
            <h3>Total Por Pessoa:</h3>
            <h3><span id="valor-dividido">R$ ${porPessoaF}</span></h3>
        </div>
    `
})
