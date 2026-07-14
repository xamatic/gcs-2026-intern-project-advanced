import { describe, it, expect } from 'vitest'
import { caesarCipher } from './cipher.js'

// These tests describe exactly how `caesarCipher` should behave.
// They will FAIL until you implement the function in cipher.js.
// Read each test as a mini-spec, then make it pass. Run: `npm test`

describe('caesarCipher', () => {
  it('shifts lowercase letters forward', () => {
    // 'abc' shifted by 3 -> 'def'
    expect(caesarCipher('abc', 3)).toBe('def')
  })

  it('shifts uppercase letters forward and keeps them uppercase', () => {
    // 'ABC' shifted by 3 -> 'DEF'
    expect(caesarCipher('ABC', 3)).toBe('DEF')
  })

  it('preserves a mix of upper and lowercase', () => {
    // 'Hello' shifted by 3 -> 'Khoor'
    expect(caesarCipher('Hello', 3)).toBe('Khoor')
  })

  it('wraps around the end of the alphabet', () => {
    // 'xyz' shifted by 3 -> 'abc' (z wraps back to a)
    expect(caesarCipher('xyz', 3)).toBe('abc')
    expect(caesarCipher('XYZ', 3)).toBe('ABC')
  })

  it('leaves spaces, numbers, and punctuation unchanged', () => {
    // Only letters move; everything else stays put.
    expect(caesarCipher('Hi, Bob 42!', 1)).toBe('Ij, Cpc 42!')
  })

  it('returns the text unchanged when the shift is 0', () => {
    expect(caesarCipher('Nothing moves.', 0)).toBe('Nothing moves.')
  })

  it('decodes with a negative shift (opposite direction)', () => {
    // Encoding 'Hello' with 3 gives 'Khoor', so decoding 'Khoor'
    // with -3 must give 'Hello' back.
    expect(caesarCipher('Khoor', -3)).toBe('Hello')
  })

  it('round-trips: encoding then decoding returns the original', () => {
    const message = 'Attack at dawn!'
    const encoded = caesarCipher(message, 7)
    expect(caesarCipher(encoded, -7)).toBe(message)
  })

  it('handles shifts larger than 26 by wrapping', () => {
    // A shift of 29 is the same as a shift of 3 (29 % 26 === 3).
    expect(caesarCipher('abc', 29)).toBe('def')
  })

  it('handles an empty string', () => {
    expect(caesarCipher('', 5)).toBe('')
  })
})
