import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { it } from 'node:test';

describe('Notifications component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });
    it('renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li').length).toBe(3);
    });
    it('renders the text "Heres is the list of notifications"', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.Notifications p'). text()).toContain('Here is the list of notifications');
    });
});
