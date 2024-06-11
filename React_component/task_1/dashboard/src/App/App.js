import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';

class App extends React.Component {
	handleKeyDown = (e) => {
		if (e.ctrlKey && e.key === 'h') {
			alert('Logging you out');
			this.props.logOut();
		}
	}
	
	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyDown);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeyDown);
	}

	

	listCourses = [
		{id: 1, name: 'ES6', credit: 60},
		{id: 2, name: 'Webpack', credit: 20},
		{id: 3, name: 'React', credit: 40}
	];

	listNotifications = [
		{id: 1, type: 'default', value: 'New course available'},
		{id: 2, type: 'urgent', value: 'New resume available'},
		{id: 3, html: { __html: getLatestNotification()}, type: 'urgent'}
	];

	render() {
		return (
			<>
			<Notifications listNotifications={this.listNotifications}/>
			<div className="App">
				<Header />
				<div className="App-separator"></div>
				<div className="App-body">
					{this.props.isLoggedIn ? (
					<CourseList listCourses={this.listCourses} /> 
					) : ( 
					<Login />
					)}
				</div>
				<div className="App-separator"></div>
				<Footer />
			</div>
			</>
  		);
	}
}

App.defaultProps = {
	isLoggedIn: false,
	logOut: () => {},
};

App.propTypes = {
	isLoggedIn: PropTypes.bool,
	logOut: PropTypes.func,
};

export default App;
