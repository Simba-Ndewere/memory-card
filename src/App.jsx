import appCSS from './App.module.css'
import { useEffect, useState } from 'react'
import { GiphyFetch } from '@giphy/js-fetch-api'

function App() {

  const gf = new GiphyFetch('gbZIdfserhdWr1e0JiDrVZ0EqLVuE7R7');

  const [gifMap, setGifMap] = useState([]);
  const [gifSelected, setGifSelected] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const uniqueNumbers = [];

  function clearScoreFunction() {
    setCurrentScore(0);
  }

  function increaseScoreFunction() {
    setCurrentScore(currentScore + 1);
  }

  function randomNumber() {
    let exit = true;
    let uniqueNumber = 0;
    while (exit) {
      uniqueNumber = Math.floor(Math.random() * 18);
      if (!uniqueNumbers.includes(uniqueNumber)) {
        exit = false;
      }
    }
    uniqueNumbers.push(uniqueNumber);
    return uniqueNumber;
  }

  function shuffleGifs() {
    const newGifArray = [];
    for (let a = 0; a < 18; a++) {
      newGifArray.push(gifMap[randomNumber()]);
    }
    return newGifArray;
  }

  async function fetchEmojis() {
    const { data: gifs } = await gf.search('face emoji', { limit: 18, type: 'gifs', sort: 'relevant' });
    setGifMap(gifs);
  }

  useEffect(() => {
    fetchEmojis();
  }, []);

  return (
    <div className={appCSS.container}>
      <div className={appCSS.header}>
        <h2> Emoji Rush </h2>
        <div className={appCSS.scoreGroup}>
          <div>Current Score {currentScore}</div>
          <div>Best Score {bestScore}</div>
        </div>
      </div>
      <div className={appCSS.emojiContainer}>
        {gifMap.map((emoji, index) => {
          if (index < 12) {
            return <div className={appCSS.item}>
              <img src={emoji.images["480w_still"].url} onClick={() => {
                setGifSelected([...gifSelected, emoji.id]);
                setGifMap(shuffleGifs());
                gifSelected.includes(emoji.id) ? clearScoreFunction() : increaseScoreFunction();
              }}></img>
            </div>
          }
        })}
      </div>
    </div >
  )
}

export default App
