import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
    let app_wrapper;

    beforeEach(() => {
        app_wrapper = shallow(<App />);
    });

    it('Renders <App /> without breaking', () => {
        expect(app_wrapper.exists()).toBe(true);
    });

    it('Renders <App /> and find .App-header component', () => {
        expect(app_wrapper.find('.App-header').length).toBe(1);
    });

    it('Renders <App /> and find .App-body component', () => {
        expect(app_wrapper.find('.App-body').length).toBe(1);
    });

    it('Renders <App /> and find .App-footer component', () => {
        expect(app_wrapper.find('.App-footer').length).toBe(1);
    });
});