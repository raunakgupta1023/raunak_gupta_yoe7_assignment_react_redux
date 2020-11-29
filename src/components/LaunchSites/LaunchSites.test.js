import React from "react";
import Enzyme, { shallow } from "enzyme";
import LaunchSites from './LaunchSites';
import "@testing-library/jest-dom/extend-expect"
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

describe("LaunchSites Component", () => {
    test("should render without throwing an error", () => {
        expect(shallow(<LaunchSites launches={[]}/>)).toHaveLength(1);
    });
});