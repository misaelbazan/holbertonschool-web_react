import logo from './holberton_logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear} from './utils'

function App() {
  return (
    <div className="App">
      	<header className="App-header">
        	<img src={logo} className="App-logo" alt="logo" />
        	<h1>
			School dashboard	         
        	</h1>
      	</header>
		<div className="App-separator"></div>
		<div className="App-body">
			<p>
				Login to access the full dashboard
			</p>
			<form>
				<label htmlFor='email'>Email:</label>
				<input type='email' id='email'></input>
				<label htmlFor='pass'>Password:</label>
				<input type='password' id='pass'></input>
				<button type='button'>OK</button>
			</form>
		</div>
		<div className="App-separator"></div>
		<footer className="App-footer">
			<p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
		</footer>	
    </div>
  );
}

export default App;
