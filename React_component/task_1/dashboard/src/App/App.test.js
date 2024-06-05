import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('App component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('Renders <App /> without crashing', () => {
        expect(wrapper.exists());
    });
    it('Renders <Notifications /> component', () => {
        expect(wrapper.contains(<Notifications />)).toBe(true);
    });
    it('Renders <Header /> component', () => {
        expect(wrapper.contains(<Header />)).toBe(true);
    });
    it('Renders <Login /> component', () => {
        expect(wrapper.contains(<Login />)).toBe(true);
    });
    it('Renders <Footer /> component', () => {
        expect(wrapper.contains(<Footer />)).toBe(true);
    });
    it("Doesn't render <CourseList /> component", () => {
        expect(wrapper.contains(<CourseList />)).toBe(false);
    });

    it('Calls logOut function and shows alert msg when ctrl+h is pressed', () => {
        const mockLogOut = jest.fn();
        window.alert = jest.fn();

        const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
        window.dispatchEvent(event);

        expect(mockLogOut).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith('Logging you out');
    });
});

describe('<App isLoggedIn={true} /> component tests', () => {
    it("Doesn't render <Login /> if logged in", () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.contains(<Login />)).toBe(false);
    });
    it('Renders CourseList if logged in', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.contains(<CourseList />)).toBe(true);
    });
});