import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { render, configure } from 'enzyme';
import Button from './Button';
configure({ adapter: new Adapter() });

test('<Button /> render with defaults', () => {
  const wrapper = render(<Button label="Ok" onClick={() => {}} />);
  console.log(wrapper.html());
});
