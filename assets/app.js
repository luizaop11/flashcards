function criaCartao(categoria, pergunta, resposta){
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
                    <h3>Você sabia?</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>Qual animal tem três corações, sangue azul e pode desligar um braço para fugir?</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>O polvo! Dois corações bombeiam sangue para as guelras e um para o corpo, seu sangue azul é por causa da hemocianina e solta um braço para escapar de predadores.</p>
                    </div>
                </div>
    `
    container.appendChild
}