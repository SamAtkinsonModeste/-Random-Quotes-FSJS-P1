/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'Beware; for I am fearless, and therefore powerful.',
    source: 'Frankenstein',
    citation: 'The Creature',
    year: '1818',
    author: 'Mary Shelly'
  },
  {
    quote: 'One day, you will be old enough to start reading fairytales again.',
    source: 'The Lion, the Witch, and the Wardrobe',
    citation: 'C.S Lewis',
    year: '1950',
    author: 'C.S Lewis'
  },
  {
    quote:
      'All we have to decide is what to do with the time that is given us.',
    source: 'The Fellowship of the Ring',
    citation: 'Gandalf',
    year: '1954',
    author: 'J.R.R. Tolkien'
  },
  {
    quote: "There is some good in this world, and it's worth fighting for.",
    source: 'The Two Towers',
    citation: 'Samwise Gamgee',
    year: '1954',
    author: 'J.R.R. Tolkien'
  },
  {
    quote:
      "Why, sometimes, I've believed as many as six impossible things before breakfast.",
    source: 'Through the Looking Glass',
    citation: 'White Queen',
    year: '1871',
    author: 'Lewis Carrol'
  },
  {
    quote:
      'Can the sarcasm, he said. Please, I always use fresh sarcasm, never canned.',
    source: 'Anita Blake Vampire Hunter: Circus of the Damned',
    citation: 'Anita Blake',
    year: '1995',
    author: 'Laurell K. Hamilton'
  },
  {
    quote:
      "Brave doesn't mean you're not scared. It means you go on even though you're scared.",
    source: 'The Hate U Give',
    citation: 'Lisa Carter (Mother)',
    year: '2017',
    author: 'Angie Thomas'
  },
  {
    quote:
      'It is our choices, Harry, that show what we truly are, far more than our abilities.',
    source: 'Harry Potter and the Chamber of Secrets',
    citation: 'Albus Dumbledore',
    year: '1998',
    author: 'J.K. Rowling'
  }
];

console.log(quotes);


/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);