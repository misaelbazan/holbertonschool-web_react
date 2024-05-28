import logo from './holberton_logo.jpg';
import './App.css';

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
		<body className="App-body">
			<p>
				Login to acces the full dashboard
			</p>
		</body>
		<div className="App-separator"></div>
		<footer className="App-footer">
			<p>Copyright 2024 - holberton School</p>
		</footer>	
    </div>
  );
}

export default App;
