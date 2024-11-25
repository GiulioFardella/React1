import logo from './logo.svg';
import './App.css';
import MainComponent from './components/MainComponent';
import ClassComponent from './components/Classcomponent';
const myName= 'Giulio'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Primo progetto di {myName} </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
       <MainComponent/>
       <ClassComponent/>
       <ClassComponent/>
       <ClassComponent/>
      </main>
    </div>
  );
}

export default App;
