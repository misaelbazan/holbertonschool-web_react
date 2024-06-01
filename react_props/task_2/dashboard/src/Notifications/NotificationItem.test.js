import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

const wrapper = shallow(<NotificationItem />);
describe("Renders <NotificationItem />", () => {
  it("renders NotificationItem component without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Renders the correct html when passing {type && value} props', () => {
    wrapper.setProps({ type: "default", value: "test" });
    expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
  });

  it('Renders the correct html when passing {html} prop', () => {
    wrapper.setProps({ html: "<u>test</u>" });
    expect(wrapper.html()).toEqual('<li data-urgent="true"><u>test</u></li>');
  });
});