import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="Header-Title">School dashboard</h1>
      </header>
      <hr className='Div-Separator'/>
      <body className="App-body">
        <p>
          Login to access the full dashboard
        </p>
      </body>
      <hr className='Div-Separator'/>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
      </div>
    </>
  );
}

export default App;
