import './style.css'
import { caesarCipher } from './cipher.js'

// This file wires the page up to your cipher function. You shouldn't
// need to change it to make the tests pass — but feel free to read it
// to see how the pieces connect, and tweak it once things work.

const input = document.querySelector('#input')
const shift = document.querySelector('#shift')
const shiftValue = document.querySelector('#shift-value')
const output = document.querySelector('#output')
const encodeBtn = document.querySelector('#encode')
const decodeBtn = document.querySelector('#decode')
const copyBtn = document.querySelector('#copy')

// Keep the little "Shift: N" label in sync with the slider.
shiftValue.textContent = shift.value
shift.addEventListener('input', () => {
  shiftValue.textContent = shift.value
})

// Run the cipher and show the result. Encoding uses a positive shift;
// decoding uses the negative of the same shift.
function run(direction) {
  const amount = Number(shift.value) * direction
  try {
    output.value = caesarCipher(input.value, amount)
  } catch (error) {
    output.value = `⚠️ ${error.message}`
  }
}

encodeBtn.addEventListener('click', () => run(1))
decodeBtn.addEventListener('click', () => run(-1))

// Copy the result to the clipboard.
copyBtn.addEventListener('click', async () => {
  if (!output.value) return
  await navigator.clipboard.writeText(output.value)
  const original = copyBtn.textContent
  copyBtn.textContent = 'Copied!'
  setTimeout(() => {
    copyBtn.textContent = original
  }, 1500)
})
