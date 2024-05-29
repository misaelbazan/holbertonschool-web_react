import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Notifications />);
    });

    it('Renders <Notifications /> without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('Renders three lists items', () => {
        expect(wrapper.find('li').length).toBe(3);
    });

    it('Renders the accurate string', () => {
        const expected = 'Here is the list of notifications';
        expect(wrapper.find('p').text()).toBe(expected);
    });
});