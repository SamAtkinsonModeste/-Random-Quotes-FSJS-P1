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
    year: '1818',
  },
  {
    quote: 'One day, you will be old enough to start reading fairytales again.',
    source: 'The Lion, the Witch, and the Wardrobe',
    citation: 'C.S Lewis',
    year: '1950',
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
    year: '1954',
  },
  {
    quote:
      "Why, sometimes, I've believed as many as six impossible things before breakfast.",
    source: 'Through the Looking Glass',
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
  }
];




/***
 * `getRandomQuote` function
 ***/

function getRandomQuote () {
  let randomIndex = Math.floor(Math.random() * quotes.length);
   let randomQuote = quotes[randomIndex];
  return randomQuote;
  
  
}



/***
 * `randomColours` function
 *  gets random numbers between 1 - 255 for each colour variable
 * assigns each red,green,blue random number to as rgb values
 ***/

function randomColours () {
  let red = randomNum = Math.floor(Math.random() * 255) + 1;
  let green = randomNum = Math.floor(Math.random() * 255) + 1;
  let blue =randomNum = Math.floor(Math.random() * 255) + 1;
  let rgb = `rgba(${red},${green}, ${blue}, 0.5)`;
  return rgb;
}




/***
 * `printQuote` function
***/
function printQuote() {

  // Colours for BODY and Quote-Box
const bgColour = randomColours();
 document.getElementsByTagName('body')[0].style.background = `${bgColour}`; 
 document.getElementById('quote-box').style.background = `linear-gradient(325deg, rgb(0,0,0) -75%, ${bgColour} 15%, rgb(0,0,0) 400%)`;

 //Building Quote with HTML
 const randomQuotes = getRandomQuote();
 let quotesHTML= `<p class="quote">${randomQuotes.quote}</p><p class="source">${randomQuotes.source}`;

    if (randomQuotes.citation){
       quotesHTML += `<span class="citation">${randomQuotes.citation}</span>` 
    }

    if (randomQuotes.year){
      quotesHTML += `<span class="year">${randomQuotes.year}</span>` 
   }

   if (randomQuotes.author){
    quotesHTML += `<span class="author">${randomQuotes.author}</span>` 
 }

 quotesHTML +=`</p>`;
  document.getElementById('quote-box').innerHTML = quotesHTML;
}

document.getElementsByTagName('body')[0].addEventListener('DOMContentLoaded', printQuote());
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);