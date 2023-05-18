/*
07

  - Observe os loops da sua versão do quiz e considere se, baseado no que foi  
    visto nessa aula, você deve refatorá-los.
*/

//selecionando formulário pela classe
const form = document.querySelector('.quiz-form')
//selecionando div para inserir resultado
const finalScoreContainer = document.querySelector('.final-score-container')
//constante com as variáveis com respostas certas de cada questão   
const correctAswers = ['D', 'C', 'D', 'B', 'A', 'C', 'A', 'C', 'B', 'A']

let score = 0

//obtém respostas do usuário
const getUserAnswers = () => {
  let userAnswers = []
  correctAswers.forEach((_, index) => {
    //valor digitado pelo usuário
    const userAnswer = form[`inputQuestion${index + 1}`].value
    userAnswers.push(userAnswer)
  })
    return userAnswers
}

//calcula a pontuação do usuário
const calculateUserScore = userAnswers => {
  //loop nas respostas enviadas pelo usuário
  userAnswers.forEach((userAnswer, index) => {
    //condição para adicionar o valor ao score
    const isUserAnswerCorrect = userAnswer === correctAswers[index]
    if(isUserAnswerCorrect){
      //score sendo incrementado
      score += 10
    }
  })
}

//exibe a pontuação final
const showFinalScore = () => {
  scrollTo({
    top:0, 
    left: 0,
    behavior: 'smooth'
  })
  //removendo a classe com display none
  finalScoreContainer.classList.remove('d-none')
}


//zerando score
const resetUserScore = () => {
  score = 0
}


const animateFinalScore = () => {
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
      // const removeClass = finalScoreContainer.classList.remove()
      //removendo background vermelho
      finalScoreContainer.classList.remove('bg-danger')
      //adicionando background verde
      finalScoreContainer.classList.add('bg-success')
    }else{
      //removendo background verde 
      finalScoreContainer.classList.remove('bg-success')
      //adicionando background vermelho
      finalScoreContainer.classList.add('bg-danger')
    }
    //incerindo o resultado no html
    finalScoreContainer.querySelector('span').textContent = `${count++}%`
    
  }, 30)
}

form.addEventListener('submit', event => {
    //evitando recarregamento da pagina 
    event.preventDefault()

    //obtém respostas do usuário
    const userAnswers = getUserAnswers()

    //zerando score
    resetUserScore()

    //calcula a pontuação do usuário
    calculateUserScore(userAnswers)

    //exibe a pontuação final
    showFinalScore()
    
    //anima a pontuação final
    animateFinalScore()
   
})
