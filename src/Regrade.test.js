import React from 'react';
import ReactDOM from 'react-dom';
import Regrade from './Regrade';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Regrade />, div);
  ReactDOM.unmountComponentAtNode(div);
});
