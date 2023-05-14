/*
07

  - Observe os loops da sua versão do quiz e considere se, baseado no que foi  
    visto nessa aula, você deve refatorá-los.
*/

//selecionando formulário pela classe
const form = document.querySelector('.quiz-form')
//selecionando div para inserir resultado
const resultado = document.querySelector('.resultado')
//constante com as variáveis com respostas certas de cada questão   
const Respostas = ['D', 'C', 'D', 'B', 'A', 'C', 'A', 'C', 'B', 'A']

//evento de submit no formulário
form.addEventListener('submit', event => {
    //evitando recarregamento da pagina 
    event.preventDefault()
    //variável que receberá o score
    let score = 0
    //constante com as respostas enviadas pelo usuário
    const minhasRespostas = [
        //questão 1
        form.inputQuestion1.value,
        //questão 2
        form.inputQuestion2.value,
        //questão 3
        form.inputQuestion3.value,
        //questão 4
        form.inputQuestion4.value,
        //questão 5
        form.inputQuestion5.value,
        //questão 6
        form.inputQuestion6.value,
        //questão 7
        form.inputQuestion7.value,
        //questão 8
        form.inputQuestion8.value,
        //questão 9
        form.inputQuestion9.value,
        //questão 10
        form.inputQuestion10.value
    ]

    //loop nas respostas enviadas pelo usuário
    minhasRespostas.forEach((minhaResposta, index) => {
        //condição para adicionar o valor ao score
        if(minhaResposta === Respostas[index]){
            //score sendo incrementado
            score += 10
        }
    })
    

    //elevando o scroll para o início da pagina
    scrollTo(0, 0)

    //removendo a classe com display none
    resultado.classList.remove('d-none')
    //contador
    count = 0
    //setInterval
    const timer = setInterval(() => {
        //condição de parada do setInterval 
        if(count === score){
            //parando o setInterval com condição de igualdade entre count e score
            clearInterval(timer)
        }
        //condição que modificará o background da div de resposta
        if(count >= 50){
            //removendo background vermelho
            resultado.classList.remove('bg-danger')
            //adicionando background verde
            resultado.classList.add('bg-success')
        }else{
            //removendo background verde 
            resultado.classList.remove('bg-success')
            //adicionando background vermelho
            resultado.classList.add('bg-danger')
        }
        //incerindo o resultado no html
        resultado.querySelector('span').textContent = `${count}%`
        //incremento
        count++
    }, 30)
   
})
