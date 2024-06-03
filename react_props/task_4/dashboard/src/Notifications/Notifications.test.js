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

    it('Renders the div.menuItem when {displayDrawer} is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.menuItem').length).toBe(1);
    });

    it("Doesn't render div.Notifications when {displayDrawer} is false", () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.Notifications').length).toBe(0);
    });

    it('Renders the div.menuItem when {displayDrawer={true}}', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.menuItem').length).toBe(1); 
    });
    it('Renders div.Notifications when {displayDrawer={true}}', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.Notifications').length).toBe(1);
    })
});