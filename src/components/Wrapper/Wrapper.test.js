import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Wrapper from './Wrapper';

configure({ adapter: new Adapter() });

const Noop = () => <div></div>

describe('<Wrapper />', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<Wrapper onClick={() => {}}>String</Wrapper>);
    expect(toJson(tree)).toMatchSnapshot();
  })
  it('renders a children string node', () => {
    const wrapper = shallow(<Wrapper onClick={() => {}}>Text</Wrapper>);
    expect(typeof wrapper.props().children).toBe('string');
    expect(wrapper.props().children).toBe('Text');
  })
  it('renders a children node', () => {
    const wrapper = shallow(<Wrapper onClick={() => {}}><Noop /></Wrapper>);
    expect(typeof wrapper.props().children).toBe('object');
    expect(wrapper.props().children).toEqual(<Noop />);
  })
})