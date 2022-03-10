import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Routes from './Routes';
import HomePage from './home-page/HomePage';

const App = () => {
  return (
    <Router>
      <Route path="/" exact={true}>
        <HomePage />
        <div className="dark-to-light" />

        <div className="projects-container">
          {/* === Link to pomodoro app ============================================== */}
          <Link to='/pomodoro' className="left">
            <h1>Pomodoro</h1>
            <img src={require('./assets/pomodoro.png')} alt="pomodoro"/>
          </Link>

          {/* === Link to markdown editor app ======================================= */}
          <Link to='/markdown-editor' className="middle">
            <h1>Markdown editor</h1>
            <img src={require('./assets/markdown-editor.png')} alt="markdown editor"/>
          </Link>

          {/* === Link to highlight tabs app ======================================== */}
          <Link to='/highlight-tabs' className="right">
            <h1>Tabs and routing</h1>
            <img src={require('./assets/highlight-tabs.png')} alt="highlight tabs"/>
          </Link>

          {/* === Link to rock paper scissors app =================================== */}
          <Link to='/rock-paper-scissors' className="left">
            <h1>Rock paper scissors</h1>
            <img src={require('./assets/rock-paper-scissors.png')} alt="rock paper scissors"/>
          </Link>

          {/* === Link to moving boxes app ========================================== */}
          <Link to='/moving-link' className="middle">
            <h1>Events and moving</h1>
            <img src={require('./assets/moving-boxes-and-link.png')} alt="moving boxes"/>
          </Link>

          {/* === Link to image gallery app ========================================= */}
          <Link to='/image-gallery' className="right">
            <h1>Infinite image gallery</h1>
            <img src={require('./assets/image-gallery.png')} alt="infinite gallery"/>
          </Link>

          {/* === Link to trivia game app =========================================== */}
          <Link to='/trivia' className="left">
            <h1>Trivia game</h1>
            <img src={require('./assets/trivia-game.png')} alt="trivia"/>
          </Link>

          {/* === Link to authentication app ======================================== */}
          <Link to='/authentication' className="middle">
            <h1>Auth0 authentication</h1>
            <img src={require('./assets/authentication.png')} alt="authentication"/>
          </Link>

          {/* === Link to web speech app ============================================ */}
          <Link to='/web-speech' className="right">
            <h1>Text to speech</h1>
            <img src={require('./assets/web-speech.png')} alt="web speech"/>
          </Link>

          {/* === Link to calendar app ============================================== */}
          <Link to='/calendar' className="left">
            <h1>Calendar and styling</h1>
            <img src={require('./assets/calendar.png')} alt="calendar"/>
          </Link>
        </div>
        <div className="light-to-dark" />
      </Route>

      <Routes />
    </Router>
  )
};

export default App