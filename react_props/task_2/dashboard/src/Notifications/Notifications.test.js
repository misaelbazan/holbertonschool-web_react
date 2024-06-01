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

    it('Renders the accurate string', () => {
        const expected = 'Here is the list of notifications';
        expect(wrapper.find('p').text()).toBe(expected);
    });

    it('Renders <NotificationItem />', () => {
        expect(wrapper.exists('NotificationItem')).toBe(true);
    });

    it('Renders (<Notifications /> the correct html', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.html()).toContain('New course available');
	});
});