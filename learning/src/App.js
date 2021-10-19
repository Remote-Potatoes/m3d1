// import logo from "./logo.svg";
import "./App.css";

// App is a component
// Paragraph is ALSO a component
// This is JSX
// Sometimes called as a superset of html or, html with javascript superpowers

function DjangoUnchained() {
  return (
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo192.png" className="App-logo" alt="logo" />
        <DjangoUnchained />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
