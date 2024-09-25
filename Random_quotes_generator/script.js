// Quotes
const quotes = [

      {
        "quote": "The best time to plant a tree was 20 years ago. The second best time is now.",
        "author": "Chinese Proverb"
      },
      {
        "quote": "Your time is limited, so don't waste it living someone else's life.",
        "author": "Steve Jobs"
      },
      {
        "quote": "You miss 100% of the shots you don’t take.",
        "author": "Wayne Gretzky"
      },
      {
        "quote": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
      },
      {
        "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "author": "Winston Churchill"
      },
      {
        "quote": "Believe you can and you're halfway there.",
        "author": "Theodore Roosevelt"
      },
      {
        "quote": "Hardships often prepare ordinary people for an extraordinary destiny.",
        "author": "C.S. Lewis"
      },
      {
        "quote": "The best revenge is massive success.",
        "author": "Frank Sinatra"
      },
      {
        "quote": "Don’t count the days, make the days count.",
        "author": "Muhammad Ali"
      },
      {
        "quote": "The only limit to our realization of tomorrow is our doubts of today.",
        "author": "Franklin D. Roosevelt"
      },
      {
        "quote": "It does not matter how slowly you go as long as you do not stop.",
        "author": "Confucius"
      },
      {
        "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        "author": "Ralph Waldo Emerson"
      },
      {
        "quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "author": "Martin Luther King Jr."
      },
      {
        "quote": "The only impossible journey is the one you never begin.",
        "author": "Tony Robbins"
      },
      {
        "quote": "Don’t let yesterday take up too much of today.",
        "author": "Will Rogers"
      },
      {
        "quote": "It always seems impossible until it’s done.",
        "author": "Nelson Mandela"
      },
      {
        "quote": "You don’t have to be great to start, but you have to start to be great.",
        "author": "Zig Ziglar"
      }
    ]
  
// Main Script
let button = document.querySelector(".change"); // Button to change quotes randomly

function GenerateRandomQuotes() {
    let para = document.querySelector(".quotes"); // Element where quotes are shown
    let author = document.querySelector(".author_name"); // Element where authors of quotes are shown

    // Generating random index
    let random_quote_index = Math.floor(Math.random() * quotes.length);
    let random_quote = quotes[random_quote_index];

    // Set the inner HTML for quote and author
    para.textContent = `"${random_quote.quote}"`;
    author.textContent = `- ${random_quote.author}`; // Note: Added a dash before the author
}

button.addEventListener("click", () => {
    GenerateRandomQuotes();
});