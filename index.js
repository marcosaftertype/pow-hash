#!/usr/bin/env node
console.time('Time')

const sha256 = require('sha256')
const program = require('commander')

program
  .version('0.0.1')
  .option('-m, --message [type]', 'Message to Hash')
  .option('-d, --difficulty [type]', 'Algorithm difficulty')
  .parse(process.argv)

const difficulty = program.difficulty
const message = program.message

if (!difficulty || !message) {
  return console.error('Both -m [message] and -d [difficulty] are required, --help for more')
}

let nonce = 1
let difficultyString = ''.padStart(difficulty, '0')

const algorithm = () => {
  const hash = sha256.x2(`${message}${nonce}`)
  if (hash.indexOf(difficultyString) === 0) {
    console.timeEnd('Time')
    console.log('Message:', message)
    console.log('Difficulty:', difficulty)
    console.log('PoW Hash:', hash)
    console.log('Nonce:', nonce)
    return
  }
  nonce++
  algorithm()
}

algorithm()
