
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Categories from './Categories'
import Results from './Results';
import ReviewPage from './ReviewPage';
import Join from './Join';

import './index.css';

function App() {

  return (

    <Router basename="/projet2_partie1_seg2525">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Categories' element={<Categories/>} />
        <Route path='/ReviewPage' element={<ReviewPage/>} />
        <Route path='/Results/:category' element={<Results/>} />
        <Route path='/Join' element={<Join/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
