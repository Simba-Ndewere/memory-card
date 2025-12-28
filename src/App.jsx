import appCSS from './App.module.css'

function App() {

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
          <div className={appCSS.item}>Item 1</div>
          <div className={appCSS.item}>Item 1</div>
          <div className={appCSS.item}>Item 1</div>
          <div className={appCSS.item}>Item 1</div>
          <div className={appCSS.item}>Item 1</div>
          <div className={appCSS.item}>Item 1</div>
          <div className={appCSS.item}>Item 1</div>
          <div className={appCSS.item}>Item 1</div>
          <div className={appCSS.item}>Item 1</div>
      </div>
    </div>
  )
}

export default App
