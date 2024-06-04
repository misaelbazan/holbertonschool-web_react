import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

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

describe('<Notifications when displayDrawer={true} listNotifications={[...]} />', () => {
    let wrapper;
    const listNotifications = [
        {id: 1, value: "New course available", type: "default"},
        {id: 2, value: "New resume available", type: "urgent"},
        {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},     
    ];

    beforeEach(() => {
        wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    }); 

    it('Renders correctly if an listNotifications={[...]}', () => {
        expect(wrapper.find(NotificationItem).length).toBe(3);
    });

    it('Renders correctly if listNotifications={[]} || !listNotifications', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={null} />);
        expect(wrapper.exists()).toBe(true);
    });

    it('Renders the correct message when listNotifications={[]}', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
        expect(wrapper.find('No new notification for now').length).toBe(1);
    });
});