import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
    it('Renders <App /> without crashing', () => {
        const app_wrapper = shallow(<App />);
        expect(app_wrapper).toBeDefined();
    });
});