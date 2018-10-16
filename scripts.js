/**
 * Hi, Jeremy and team at Quaver Music. 
 * I hope that the rest of the job search goes well. 
 * I look forward to hearing from you all!
 * 
 * Thanks for your time and consideration,
 * - Robert Spurlin
 * 
 */

function preambleCount() {
    // First things first, let's hardcode the preamble as a string. 
    const preamble = 'We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.';

    /**
     * My first thought on how to make this work is to use regex.
     * So what I am going to do first is declare 3 regular expressions
     * in variables for each test.
     */

    /**
     * This regex will match any word that starts eith the letter t (case insensitive). 
     * Translation: match word boundary, the letter t, any word character (not spaces or symbols),
     * match one or more word characters, and end with another word boundry 
     * with global and case insensitive flags. 
     */
    const startsWithT = /\b[t]\w+\b/gi;

    /**
     * Same concept as the last regex, just starts with all word charachers (1 or more),
     * and ends with e and word boundary.
     */
    const endsWithE = /\b\w+[e]\b/gi;

    /**
     * This last regex is the last two together with one more thing. 
     * Question mark at the end of word characters because we want to match 
     * theoretical words that start with t and end with e.
     * Question marks make last set 'sticky', matching 0 or more. 
     */
    const bothRegex = /\b[t]\w+?[e]\b/gi;

    /**
     * Okay, now the actual matching. 
     * All three counting variables follow the same pattern and is a number.
     * If regex is a match, it will assign length of matches.
     * Else, will match 0 becuase length of empty array is 0.
     */

    // Should be 10,
    const startsWithTCount = (preamble.match(startsWithT) || []).length;
    // Should be 16,
    const endsWithECount = (preamble.match(endsWithE) || []).length;
    // Should be 6. 
    const bothCount = (preamble.match(bothRegex) || []).length;

    // Let's return all three variables in an array. 
    return [startsWithTCount, endsWithECount, bothCount];
}

const answers = preambleCount();

// Finally, let's publish the answers. 
document.getElementById('startsWithT').innerHTML = answers[0];
document.getElementById('endsWithE').innerHTML = answers[1];
document.getElementById('both').innerHTML = answers[2];

// Again, thank you all for your time.
console.log('Hi, dev friend! Check out the scripts.js file for the code and the comments with it.');
console.log('Thanks! - Robert Spurlin');