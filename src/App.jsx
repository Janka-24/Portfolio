import { useState } from 'react'
import reactLogo from './assets/react.svg'
import avatar from '../public/img/janka.png'
import './App.css'

function App() {
  return (
    <body>
      <header>
        <div>
          <h1>Janka</h1>
        </div>

        <div>
          <a href="#">Home</a>
          <a href="#">Project</a>
          <a href="#">About me</a>
        </div>
      </header>
      <main>
        <div id="avatarContainer">
          <img src={avatar} alt="Janka" id="avatar" />
        </div>
      </main>
      <footer></footer>

    </body>
  )
}

export default App
