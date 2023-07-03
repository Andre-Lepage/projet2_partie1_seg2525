
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Categories from './Categories'
import Results from './Results';
import ReviewPage from './ReviewPage';
import Join from './Join';

import './index.css';

function App() {

  return (

    <Router basename="/">
      <Routes>
        <Route exact path='/' component={Home} />
        <Route path='/Categories' component={Categories} />
        <Route path='/ReviewPage' component={ReviewPage} />
        <Route path='/Results/:category' component={Results} />
        <Route path='/Join' component={Join} />
      </Routes>
    </Router>
    
  );
}

export default App;
