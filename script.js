const cidade = document.getElementById('input')
const button = document.getElementById('button')


const chaveDoSite = '0feed1dd6765da000459bad78abecfba'

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chaveDoSite}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados) /*Enviando as informações que estao em um escopo local da buscarCidade para a colocarDadosNaTela*/ 
}

function colocarDadosNaTela(dados){
    console.log(dados)
    document.getElementById('texto-cidade').innerHTML = `Tempo em ${dados.name}`
    document.getElementById('graus').innerHTML = `${Math.floor(dados.main.temp)}ºC`
    document.getElementById('texto-previsao').innerHTML = dados.weather[0].description
    document.getElementById('umidade').innerHTML = `Úmidade: ${dados.main.humidity}%`
    document.getElementById('imagem-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}


function cliqueiNoBotaoDePesquisa() {
    const cidade = document.getElementById('input').value
    buscarCidade(cidade)
}

button.addEventListener('click', cliqueiNoBotaoDePesquisa)

