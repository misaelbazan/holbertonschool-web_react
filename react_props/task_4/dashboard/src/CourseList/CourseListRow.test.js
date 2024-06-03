import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow /> component tests', () => {
    it('Renders one cell with [colspan=2] when isHeader={true}\
    and {textSecondCell}=null', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='first-cell-test' />);
        expect(wrapper.find('th').exists()).toBe(true);
    });
    it('Renders two cells when {isHeader}=true and {textSecondCell} exists', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='first-cell-test' textSecondCell='second-cell-test' />);
        expect(wrapper.find('th').length).toBe(2);
    });
    it('Renders two <td/> within a <tr/> when isHeader={false}', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='test1Cell' textSecondCell='test2Cell' />);
        expect(wrapper.find('tr').length).toBe(1);
        expect(wrapper.find('td').length).toBe(2);
    });
});