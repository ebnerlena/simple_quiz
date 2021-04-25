// Lena Ebner - MMT-b 2019
import { getQuestions } from './questions.js'

let availableQuestions = null

export async function askQuestion () {
  availableQuestions = await getQuestions()

  const rnd = getRandomInt(availableQuestions.length)
  const question = availableQuestions[rnd]
  const newQuestion = Object.assign({}, question)
  delete newQuestion.correctAnswer
  return newQuestion
}

export async function answerQuestion (que, answer) {
  availableQuestions = await getQuestions()

  if (typeof (que) === 'undefined') {
    que = history.state.q
    answer = history.state.a
  }

  const originalQuestion = availableQuestions.find(q => q.question === que.question)

  return (originalQuestion.correctAnswer === answer)
}

function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}
