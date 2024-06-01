import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

describe('App component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('Renders <App /> without crashing', () => {
        expect(wrapper).toBeDefined();
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
});