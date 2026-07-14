// ============================================================
//  Caesar Cipher  —  your job is to make this function work!
// ============================================================
//
// A Caesar cipher shifts every letter in a message forward through
// the alphabet by a fixed number of positions. For example, with a
// shift of 3:   a -> d,  b -> e,  c -> f ...
//
// To DECODE a message, you shift in the opposite direction. Here we
// use ONE function for both: a positive shift encodes, a negative
// shift decodes. (So decoding "khoor" with shift 3 is the same as
// encoding it with shift -3.)
//
// Run the tests with `npm test` and let them guide you. They will
// all fail at first — that's expected. Make them pass one by one.
//
// ------------------------------------------------------------
//  HINTS (read these, then delete the `throw` line and build it)
// ------------------------------------------------------------
//
//  1. You'll want to look at ONE character at a time. Turning the
//     text into an array of characters makes that easy, e.g.
//         text.split('')   or   [...text]
//
//  2. For each character, figure out: is it a letter A-Z or a-z?
//     If it is NOT a letter (a space, number, or punctuation),
//     leave it exactly as it is.
//
//  3. Every character has a number code. These two are your friends:
//         'a'.charCodeAt(0)          // -> the code for 'a'
//         String.fromCharCode(97)    // -> 'a'
//     The lowercase letters a-z are 97..122, and uppercase A-Z
//     are 65..90.
//
//  4. The tricky part is "wrapping around" the end of the alphabet.
//     If you shift 'z' forward by 1 it should become 'a', not some
//     symbol. The remainder operator `%` is the classic tool for
//     wrapping. Think about mapping a letter to 0..25 first, adding
//     the shift, then using `% 26` before turning it back into a
//     letter.
//
//  5. Watch out for negative shifts (used for decoding). In JS,
//     a negative number `% 26` can be negative too. Adding 26 and
//     taking `% 26` again keeps the result in the 0..25 range.
//
//  6. Keep uppercase letters uppercase and lowercase letters
//     lowercase.
//
// Take it one hint at a time. When every test passes, you're done!

export function caesarCipher(text, shift) {
    console.clear();
    // TODO: replace this line with your implementation.

    // Variable setups.
    let correctedChar = ""
    var cipheredText = "";
    let textSplit = text.split('');
    let supportedChars = "abcdefghijklmnopqrstuvwxyz".split('');

    // For loop that takes in all textSplit objects into account and uses it to check all characters.
    for (var i in textSplit) {
      // Variables for the rest of the code in the blocks below.
      //       isUpperCase: Self explanitory. 
      // charIndexLocation: Checks the exact character Location
      let isUpperCase = (textSplit[i] === textSplit[i].toUpperCase())
      let charIndexLocation = supportedChars.indexOf(textSplit[i].toLowerCase());

      // Checks to verify that the index exists
      if (supportedChars.indexOf(textSplit[i].toLowerCase()) >= 0) {
        let newIndex = (charIndexLocation + shift) % 26;
        if (newIndex < 0) newIndex += 26;

        let correctedChar = supportedChars[newIndex];
        // Makes sure that upper case letters are not ignored
        if (isUpperCase) {
          cipheredText += correctedChar.toUpperCase(); 
        } else if (!isUpperCase) {
          cipheredText += correctedChar
        }
    
        
        console.log(shift);

      } else {
        cipheredText += textSplit[i];
      }
    }
    return cipheredText;
    throw new Error('caesarCipher is not implemented yet')
}

/* Failed code.
  var isUpperCase = (textSplit[i] === textSplit[i].toUpperCase())
        if (supportedChars.indexOf(textSplit[i].toLowerCase()) > 0) {
            // Find current Character Index
            let charIndexLocation = supportedChars.indexOf(textSplit[i]);
            // Check to see if characters match
            if (textSplit[i] == supportedChars[charIndexLocation]) {
                // Allow characters to shift
                console.log(charIndexLocation);
                
                if ((charIndexLocation + shift) < charIndexLocation.toString().length) {
                    text.split[i] = supportedChars[charIndexLocation + shift]
                    console.log("Shifted with: Lessthen length " + text);
                } else {
                    text.split[i] = supportedChars[0 + shift]
                    console.log("Shifted with: Greater then length " + text);
                }
                //console.log(text);
            }
            //console.log(charIndexLocation);
        } else {
          
        }
*/