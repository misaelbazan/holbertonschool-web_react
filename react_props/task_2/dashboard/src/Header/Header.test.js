import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe("Testing Header component", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Header />);
    });
    it('Renders without crashing', () => {
        expect(wrapper.exists()).toEqual(true);
    });
    it('Renders img and h1 tags', () => {
        expect(wrapper.exists("img").toBe(true));
        expect(wrapper.constainsMatchingElement(<h1>School dashboard</h1>)).toBe(true);
    });
});