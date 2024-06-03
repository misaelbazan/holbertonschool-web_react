import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';

function App({ isLoggedIn }) {
  return (
	<>
		<Notifications />
    	<div className="App">
			<Header />
			<div className="App-separator"></div>
			<div className="App-body">
				{isLoggedIn ? <CourseList /> : <Login />}
			</div>
			<div className="App-separator"></div>
			<Footer />
    	</div>
	</>
  );
}

App.defaultProps = {
	isLoggedIn: false,
};

App.propTypes = {
	isLoggedIn: PropTypes.bool,
};

export default App;
