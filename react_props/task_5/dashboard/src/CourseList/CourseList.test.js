import React from 'react';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';

const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
];

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

    it('Renders correctly if listCourses is an empty array or is not passed', () => {
        const wrapper = shallow(<CourseList />)
        expect(wrapper.find('td').length).toBe(1);
        expect(wrapper.find('td').text()).toBe('No course available yet');
    });
});