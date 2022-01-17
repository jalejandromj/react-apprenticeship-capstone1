import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';

import Home from './Home.page.jsx';

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Home/>, div)
});

/*it("renders VideoCard correctly", () => {
	const {getByTestId} = render(<VideoCard name="test name" description="test description" channel="test channel"/>);
	expect(getByTestId("videoCard")).toHaveTextContent("test name");
	expect(getByTestId("videoCard")).toHaveTextContent("test description");
	expect(getByTestId("videoCard")).toHaveTextContent("test channel");
	expect(getByTestId("videoCard")).toContainHTML('<img alt=""/>')
});*/

/*test('Always true fake test', () => {
	expect(true).toBeTruthy();
});*/

/*test('Descriptive text', () => {
	expect(functionToTest(val1, val2)).toBe('expected result');
});*/