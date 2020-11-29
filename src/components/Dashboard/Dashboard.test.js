import React from "react";
import Enzyme, { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Dashboard from './Dashboard';
import "@testing-library/jest-dom/extend-expect"
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({launches:{launches: []}});

describe("Dashboard Component", () => {
    test("should render without throwing an error", () => {
        expect(shallow(
            <Provider store={store}>
                <Dashboard />
            </Provider>
        )).toHaveLength(1);
    });
});