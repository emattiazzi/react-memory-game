import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from './Button';
configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('should render a Button with label and onClick props', () => {
    const buttonLabel = 'A button';
    const wrapper = shallow(<Button onClick={() => {}} label={buttonLabel} />);
    expect(wrapper.text()).toBe(buttonLabel);
  })

  it('matches the snapshot', () => {
    const tree = shallow(<Button onClick={() => {}} label="Snapshot" />);
    expect(toJson(tree)).toMatchSnapshot();
  })

  it('calls onClick when clicked ', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button onClick={onClick} label="Simulate click" />);
    const button = wrapper.find('button');

    button.simulate('click');
    expect(onClick).toHaveBeenCalled();
  })
})