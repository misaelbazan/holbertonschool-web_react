import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';

function App({ isLoggedIn }) {
	const listCourses = [
		{id: 1, name: 'ES6', credit: 60},
		{id: 2, name: 'Webpack', credit: 20},
		{id: 3, name: 'React', credit:40}
	];

	const listNotifications = [
		{id: 1, type: 'default', value: 'New course available'},
		{id: 2, type: 'urgent', value: 'New resume available'},
		{id: 3, html: { __html: getLatestNotification()}, type: 'urgent'}
	];

  	return (
		<>
		<Notifications listNotifications={listNotifications}/>
    	<div className="App">
			<Header />
			<div className="App-separator"></div>
			<div className="App-body">
				{isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
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
