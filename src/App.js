import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Routes from './Routes';

const App = () => {
  return (
    <Router>
      <Route path="/" exact={true}>
        <h1>Hello world!</h1>

        <div className="projects-container">
          {/* === Link to pomodoro app ============================================== */}
          <Link to='/pomodoro'>
            <img src={require('./assets/pomodoro.png')} alt="pomodoro"/>
          </Link>

          {/* === Link to markdown editor app ======================================= */}
          <Link to='/markdown-editor'>
            <img src={require('./assets/markdown-editor.png')} alt="markdown editor"/>
          </Link>

          {/* === Link to highlight tabs app ======================================== */}
          <Link to='/highlight-tabs'>
            <img src={require('./assets/highlight-tabs.png')} alt="highlight tabs"/>
          </Link>

          {/* === Link to rock paper scissors app =================================== */}
          <Link to='/rock-paper-scissors'>
            <img src={require('./assets/rock-paper-scissors.png')} alt="rock paper scissors"/>
          </Link>

          {/* === Link to moving boxes app ========================================== */}
          <Link to='/moving-link'>
            <img src={require('./assets/moving-boxes-and-link.png')} alt="moving boxes"/>
          </Link>

          {/* === Link to image gallery app ========================================= */}
          <Link to='/image-gallery'>
            <img src={require('./assets/image-gallery.png')} alt="image gallery"/>
          </Link>

          {/* === Link to trivia game app =========================================== */}
          <Link to='/trivia'>
            <img src={require('./assets/trivia-game.png')} alt="trivia"/>
          </Link>

          {/* === Link to authentication app ======================================== */}
          <Link to='/authentication'>
            <img src={require('./assets/authentication.png')} alt="authentication"/>
          </Link>

          {/* === Link to web speech app ============================================ */}
          <Link to='/web-speech'>
            <img src={require('./assets/web-speech.png')} alt="web speech"/>
          </Link>

          {/* === Link to calendar app ============================================== */}
          <Link to='/calendar'>
            <img src={require('./assets/calendar.png')} alt="calendar"/>
          </Link>
        </div>
      </Route>

      <Routes />
    </Router>
  )
};

export default App