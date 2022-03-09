import React from 'react';
// routing
import { Route } from 'react-router-dom';
// projects
import Pomodoro from './projects/pomodoro/Pomodoro';
import Editor from './projects/editor/Editor';
import Tabs from './projects/highlight-tabs/Tabs';
import RockPaperScissors from './projects/rock-paper-scissors/RockPaperScissors';
import MovingLink from './projects/moving-link/MovingLink';
import ImageGallery from './projects/image-gallery/ImageGallery';
import Trivia from './projects/trivia/Trivia';
import Authentication from './projects/authentication/AuthenticationWrapper';
import WebSpeech from './projects/web-speech/WebSpeech';
import Calendar from './projects/calendar/Calendar';

function Routes() {
  return <>
      <Route path="/pomodoro">
        <Pomodoro />
      </Route>

      <Route path="/markdown-editor">
        <Editor />
      </Route>

      <Route path="/highlight-tabs">
        <Tabs />
      </Route>

      <Route path="/rock-paper-scissors">
        <RockPaperScissors />
      </Route>

      <Route path="/moving-link">
        <MovingLink />
      </Route>

      <Route path="/image-gallery">
        <ImageGallery />
      </Route>

      <Route path="/trivia">
        <Trivia />
      </Route>

      <Route path="/authentication">
        <Authentication />
      </Route>

      <Route path="/web-speech">
        <WebSpeech />
      </Route>

      <Route path="/calendar">
        <Calendar />
      </Route>
  </>
}

export default Routes;
