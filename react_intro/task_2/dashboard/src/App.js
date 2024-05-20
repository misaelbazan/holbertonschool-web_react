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
        <div className="Login-Interface">
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <button type="button">OK</button>
        </div>
        </div>
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
