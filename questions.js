// Lena Ebner - MMT-b 2019

import { delay } from './delay.js'

const questions = [
  {
    question: 'What can one catch that is not thrown?',
    correctAnswer: 'a',
    a: 'A cold',
    b: 'A ball',
    c: 'A leave',
    d: 'A umbrella'
  },
  {
    question: 'What is always coming, but never arrives?',
    correctAnswer: 'c',
    a: 'Yesterday',
    b: 'Winter',
    c: 'Tomorrow',
    d: 'Christmas Spirit'
  },
  {
    question: 'In Oklahoma City its illegal for a prisoner to wear what?',
    correctAnswer: 'd',
    a: 'A skirt.',
    b: 'Socks.',
    c: 'A hat.',
    d: 'Pink Bikini Underwear'
  },
  {
    question: 'Where are 40,000 Americans injured each year?',
    correctAnswer: 'c',
    a: 'In public transports.',
    b: 'In a river.',
    c: ' In the toilet',
    d: 'In the mountains.'
  },
  {
    question: 'What did people in the Middle Ages throw at the bride and groom?',
    correctAnswer: 'b',
    a: 'Tomatoes',
    b: 'Eggs',
    c: 'Shoes',
    d: 'Soil'
  }

]

export async function getQuestions () {
  try {
    await delay()
    // console.log("back from the DELAY");
    return questions
  } catch (e) {
    console.error('oh noooo- something went wrong :(' + e)
  }
}

// export { questions as availableQuestions };
