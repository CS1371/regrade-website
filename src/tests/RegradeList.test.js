import React from 'react';
import ReactDOM from 'react-dom';
import RegradeList from '../containers/RegradeList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegradeList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
