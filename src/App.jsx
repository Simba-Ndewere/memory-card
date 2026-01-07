import appCSS from './App.module.css'
import { useEffect, useState } from 'react'
import { GiphyFetch } from '@giphy/js-fetch-api'

function App() {

  const gf = new GiphyFetch('gbZIdfserhdWr1e0JiDrVZ0EqLVuE7R7');

  const [gifMap, setGifMap] = useState([]);
  const [gifSelected, setGifSelected] = useState([]);
  const uniqueNumbers = [];

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

  console.log(gifMap);
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
          <div>Current Score</div>
          <div>Best Score</div>
        </div>
      </div>
      <div className={appCSS.emojiContainer}>
        {gifMap.map((emoji, index) => {
          if (index < 12) {
            return <div className={appCSS.item}>
              <img src={emoji.images["480w_still"].url} onClick={() => {
                setGifSelected([...gifSelected, emoji.id]);
                setGifMap(shuffleGifs());
              }}></img>
            </div>
          }
        })}
      </div>
    </div >
  )
}

export default App
