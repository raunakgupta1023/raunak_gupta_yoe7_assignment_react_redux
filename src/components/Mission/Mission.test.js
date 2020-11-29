import React from "react";
import Enzyme, { shallow } from "enzyme";
import Mission from './Mission';
import "@testing-library/jest-dom/extend-expect"
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

describe("Mission Component", () => {
    test("should render without throwing an error", () => {
        expect(shallow(<Mission mission={{links:{}, rocket:{}, launch_site:{}}}/>)).toHaveLength(1);
    });
});