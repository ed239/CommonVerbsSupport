
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Routes} from 'react-router-dom';
import Home from './components/Home';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from './components/Contact';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
    <Navbar />
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/russian" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </div>
    </Router>
  );
};


export default App;
