import './App.css';
import { BrowserRouter as Router,  Routes, Route} from 'react-router-dom';
import {Header} from './components/Header'
import {Watched} from './components/Watched'
import {Watchlist} from './components/Watchlist'
import {Add} from './components/Add'

import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Watchlist/>}/>
        <Route exact path="/watched" element={<Watched/>}/>
        <Route exact path="/add" element={<Add/>}/>
      </Routes>
    </Router>
    </GlobalProvider>
  );
}

export default App;
