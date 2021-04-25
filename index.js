// Lena Ebner - MMT-B 2019

import { askQuestion, answerQuestion } from './quiz.js'
import { html, render } from './lib.js'

// home screen template
const homeScreen = () => {
  const domElements = html(`
        <section>
            <h2> Start now: </h2>
            <p><a href="./quiz"  class="btn"> START </a></p>
        </section>
    `)

  const relevantElements = domElements.querySelector('section')
  relevantElements.querySelector('a').addEventListener('click', (evt) => {
    evt.preventDefault()
    history.pushState(null, 'Quiz Start', evt.target.href)
    onRender()
  })
  return relevantElements
}

// result screen template
const resultScreen = (result) => {
  const domElements = html(`
        <section>
            <h2> Result: </h2>
            <p> ${result
                ? 'Congrats!!! You guessed correctly'
                : 'What a pitty. Your answer was wrong. Try again.'
            } </p>
            <p><a href="./" class="btn"> Back to Start </a></p>
        </section>
    `)

  const relevantElements = domElements.querySelector('section')
  relevantElements.querySelector('a').addEventListener('click', (evt) => {
    evt.preventDefault()
    history.pushState(null, 'Start Page', evt.target.href)
    onRender()
  })

  return relevantElements
}

// quiz screen template
const quizScreen = (question) => {
  const domElements = html(`
        <section>
            <h2>Question: ${question.question} </h2>
            <div id="answers">
            <h3> Possible answers: </h3>
                <ul>
                    <li> A: ${question.a} </li>
                    <li> B: ${question.b} </li>
                    <li> C: ${question.c} </li>
                    <li> D: ${question.d} </li>
                </ul>
            </div>
            <div id="answer-buttons" >
            <h3> Choose your answer: </h3>
                <ul>
                    <li> <a data-answer="a" class="btn" href="./result"> A </a> </li>
                    <li> <a data-answer="b" class="btn" href="./result"> B </a> </li>
                    <li> <a data-answer="c" class="btn" href="./result"> C </a> </li>
                    <li> <a data-answer="d" class="btn" href="./result"> D </a> </li>
                </ul>
            </div>
        </section>
    `)

  const relevantElements = domElements.querySelector('section')

  const allLinks = relevantElements.querySelectorAll('a')
  Array.from(allLinks).forEach((link) => {
    link.addEventListener('click', (evt) => {
      const answer = evt.target.dataset.answer
      const qa = { q: question, a: answer }

      evt.preventDefault()
      history.pushState(qa, 'Result Page', evt.target.href)

      Answer(question, answer)
      onRender()
    })
  })
  return relevantElements
}

async function StartQuiz () {
  try {
    const domElement = document.querySelector('#content')
    const question = await askQuestion()

    render(domElement, quizScreen(question))
  } catch (e) {
    // console.log("oh no...an unexpected error occured :(" +e);
  }
}

async function Answer (question, quess) {
  const answer = await answerQuestion(question, quess)
  const domElement = document.querySelector('#content')

  render(domElement, resultScreen(answer))
}

const onRender = () => {
  const pathName = window.location.pathname
  const domElement = document.querySelector('#content')

  if (pathName === '/') {
    render(domElement, homeScreen())
  } else if (pathName === '/quiz') {
    StartQuiz()
  } else if (pathName === '/result') {
    Answer()
  } else {
    domElement.innerHTML = '404 not found'
  }
}

onRender()

window.onpopstate = () => {
  onRender()
}
