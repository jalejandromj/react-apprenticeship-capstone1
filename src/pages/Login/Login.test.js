import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import LoginPage from './Login.page.jsx';
import AuthProvider from '../../providers/Auth';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthProvider><LoginPage /></AuthProvider>, div);
});

test("It should render initial basic elements", () => {
    const { getByLabelText, queryAllByRole } = render(
      <AuthProvider><LoginPage /></AuthProvider>
    );
    const usernameInput = getByLabelText("username");
    const passwordInput = getByLabelText("password");
    const buttons = queryAllByRole("button");

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(buttons).toHaveLength(1);
});