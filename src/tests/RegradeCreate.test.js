import React from 'react';
import ReactDOM from 'react-dom';
import RegradeCreate from '../containers/RegradeCreate';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegradeCreate />, div);
  ReactDOM.unmountComponentAtNode(div);
});
