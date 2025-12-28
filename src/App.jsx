import appCSS from './App.module.css'

function App() {

  return (
    <div className={appCSS.container}>
      <div className={appCSS.header}>
        <h2> Memory Game </h2>
        <div className={appCSS.scoreGroup}>
            <div>Current Score</div>
            <div>Best Score</div>
        </div>
      </div>
    </div>
  )
}

export default App
