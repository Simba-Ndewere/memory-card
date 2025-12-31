import appCSS from './App.module.css'
import { useEffect, useState } from 'react'
import { GiphyFetch } from '@giphy/js-fetch-api'

function App() {

  const gf = new GiphyFetch('gbZIdfserhdWr1e0JiDrVZ0EqLVuE7R7');

  useEffect(() => {
    fetchEmojis();
  }, []);

  async function fetchEmojis() {
      const { data: gifs } = await gf.search('face emojis', { limit: 18, type: 'gifs' });
      console.log('simba');
      console.log(gifs);
    }

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
        <div className={appCSS.item}>Item 1</div>
        <div className={appCSS.item}>Item 2</div>
        <div className={appCSS.item}>Item 3</div>
        <div className={appCSS.item}>Item 4</div>
        <div className={appCSS.item}>Item 5</div>
        <div className={appCSS.item}>Item 6</div>
        <div className={appCSS.item}>Item 7</div>
        <div className={appCSS.item}>Item 8</div>
        <div className={appCSS.item}>Item 9</div>
        <div className={appCSS.item}>Item 10</div>
        <div className={appCSS.item}>Item 11</div>
        <div className={appCSS.item}>Item 12</div>
      </div>
    </div>
  )
}

export default App
