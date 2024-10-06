import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LyfscienceQuiz from './components/LyfscienceQuiz';
import NavalQuiz from './components/NavalQuiz';
import MissileQuiz from './components/MissileQuiz';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/lyfscience-quiz" component={LyfscienceQuiz} />
        <Route path="/naval-quiz" component={NavalQuiz} />
        <Route path="/missile-quiz" component={MissileQuiz} />
      </Switch>
    </Router>
  );
}

export default App;
