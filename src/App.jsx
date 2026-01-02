import appCSS from './App.module.css'
import { useEffect, useState } from 'react'
import { GiphyFetch } from '@giphy/js-fetch-api'

function App() {

  const gf = new GiphyFetch('gbZIdfserhdWr1e0JiDrVZ0EqLVuE7R7');
  let emojisArray = [];

  const [gifState, setGifState] = useState(emojisArray)

  async function fetchEmojis() {
    const { data: gifs } = await gf.search('face emojis', { limit: 18, type: 'gifs' });
    setGifState(gifs);
    console.log(gifState)
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
        {gifState.map((emoji) => {
          return <div className={appCSS.item}>
            <img src={emoji.images["480w_still"].url}></img>
            </div>
        })}
    </div>
    </div >
  )
}

export default App
