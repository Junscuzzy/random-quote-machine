import React, { useState, useEffect } from 'react';
import ReactSVG from 'react-svg'
import { Helmet } from "react-helmet/es/Helmet";
import 'normalize.css';

import './App.scss';
import twitter from './twitter.svg';
import { quotes } from './quotes'

// Tests with freeCodeCamp
const fccCdn = 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js';

function App() {
  const [quote, setQuote] = useState({});

  // returns a random integer from 0 to "max - 1"
  const getRandomByMax = max => Math.floor(Math.random() * max);

  // return a random quote {quote: string, author: string}
  const getRandomQuote = () => {
    const randomQuote = quotes[getRandomByMax(quotes.length)];
    setQuote(randomQuote);
  };

  // Get random quote onLoad only
  useEffect(() => getRandomQuote(), []);

  const { quote: text, author } = quote;
  return (
    <div className="App">
      <Helmet>
        <script type="text/javascript" src={fccCdn} />
      </Helmet>
      <div id="quote-box" className="App__box">
        <div className="App__body">
          <p id="text" className="App__text">
            "{text}"
          </p>
          <p id="author" className="App__author">
            - {author}
          </p>
        </div>
        <div className="App__footer">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://twitter.com/intent/tweet?text=${text}`}
            id="tweet-quote"
            className="App__tweet"
          >
            <ReactSVG src={twitter} alt="twitter" className="App__icon" />
          </a>
          <button
            id="new-quote"
            onClick={getRandomQuote}
            className="App__new">
            Nouvelle citation
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
