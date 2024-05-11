import logo from './AppLogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Learn Hebrew: Common Verbs</h1>
      <h2>App Support</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <h4>For any inquiries contact: learncommonverbs@gmail.com</h4>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Eden
        </a> */}
      </header>
    </div>
  );
}

export default App;
