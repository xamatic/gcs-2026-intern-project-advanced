# Caesar Cipher

A small tool for encoding and decoding messages with a [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher) — a classic technique that shifts each letter through the alphabet by a fixed amount.

## Your task

1. **Implement the cipher.** Open `src/cipher.js` and complete the `caesarCipher(text, shift)` function. Read the comment hints — they walk you through the algorithm.
2. **Let the tests guide you.** The tests in `src/cipher.test.js` describe exactly how the function should behave. They all fail at first. Make them pass one at a time.
3. **Style the tool.** The layout in `index.html` is a plain starting point. Make it yours in `src/style.css` — colors, layout, typography, a theme. Keep the element `id`s (the JavaScript uses them).

## Getting started

```bash
npm install    # one-time setup
npm test       # run the tests (start here — watch them fail)
npm run dev    # launch the tool in your browser
```

`npm test` re-runs automatically as you edit. Once every test passes, the tool will encode and decode for real.

## How it works

One function handles both directions: encoding uses a positive shift, decoding uses the negative of the same shift. For example, encoding `"Hello"` with a shift of `3` gives `"Khoor"`, and decoding `"Khoor"` with `-3` gives `"Hello"` back.

## Project layout

| File | What it's for |
| --- | --- |
| `src/cipher.js` | The cipher function — **your implementation goes here.** |
| `src/cipher.test.js` | Tests that define how the cipher should behave. |
| `index.html` | The page structure (your styling canvas). |
| `src/style.css` | Styles — **make it your own.** |
| `src/main.js` | Wires the page to the cipher. No changes needed to finish the task. |

## Implementations
# Guilford County Schools: Technology Services | Summer 2026 Internship Project

This repository is a template project for Guilford County Schools' programming interns.

Each intern will fork the repository and develop their own implementation of the Todo App. When complete, they will deploy their application and add a link to this README.

## Technologies Used
This is a single-page application ([SPA](https://developer.mozilla.org/en-US/docs/Glossary/SPA)) written in JavaScript using [Svelte 5](https://svelte.dev/docs/svelte/overview), a web application framework.

By using Svelte, students can get experience with using foundational web technologies like HTML, CSS, and JavaScript to build interactive applications without extensive boilerplate.

## Contributors

### Week of July 13th - Xander [@Xamatic](https://github.com/xamatic)

Xander's app: https://gcs-2026-intern-todo-advanced.vercel.app/

### Week of July 20th

### Week of July 27th

### Week of August 3rd

### Week of August 10th
