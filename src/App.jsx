import appCSS from './App.module.css'
import { useEffect, useState } from 'react'
import { GiphyFetch } from '@giphy/js-fetch-api'

function App() {

  const gf = new GiphyFetch('gbZIdfserhdWr1e0JiDrVZ0EqLVuE7R7');
  const gif1 = '5jYfdR7KVIOKt7YUfo';
  const gif2 = '1X7mEAT2Kkk8oYFsul';

  const [gifMap, setGifMap] = useState([]);
  const [gifSelected, setGifSelected] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const uniqueNumbers = [];
  function clearScoreFunction() {
    setCurrentScore(0);
    setGifSelected([]);
    if (currentScore > bestScore)
      setBestScore(currentScore)
  }

  console.log(gifMap[0]);

  function increaseScoreFunction() {
    setCurrentScore(currentScore + 1);
  }

  function randomNumber() {
    let exit = true;
    let uniqueNumber = 0;
    while (exit) {
      uniqueNumber = Math.floor(Math.random() * gifMap.length);
      if (!uniqueNumbers.includes(uniqueNumber)) {
        exit = false;
      }
    }
    uniqueNumbers.push(uniqueNumber);
    return uniqueNumber;
  }

  function shuffleGifs() {
    const newGifArray = [];
    for (let a = 0; a < 8; a++) {
      newGifArray.push(gifMap[randomNumber()]);
    }
    return newGifArray;
  }

  async function fetchEmojis() {
    const { data: gifs } = await gf.search('@JoyPixels face', { limit: 18, type: 'gifs', sort: 'relevant' });
    console.log(gifs);
    setGifMap(
      gifs.filter(gif =>
        gif.id !== gif1 && gif.id !== gif2
      )
    )
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
          if (index < 8) {
            return <div className={appCSS.item}>
              <video
                src={emoji.images.fixed_height.mp4}
                autoPlay
                loop
                muted
                playsInline
                onClick={() => {
                  setGifSelected([...gifSelected, emoji.id]);
                  setGifMap(shuffleGifs());
                  gifSelected.includes(emoji.id) ? clearScoreFunction() : increaseScoreFunction();
                }}></video>
            </div>
          }
        })}
      </div>
    </div >
  )
}

export default App
