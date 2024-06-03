import React from 'react';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';

describe('<CourseList /> component tests', () => {
    it('<CourseList /> renders without crashing', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.exists()).toBe(true);
    });
    it('Renders 5 different rows', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find('thead').children()).toHaveLength(2);
        expect(wrapper.find('tbody').children()).toHaveLength(3);
    });
});