/* eslint no-underscore-dangle: 0 */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Typekit from './Typekit';
import buildScript from './utilities/buildScript';

describe('<Typekit />', () => {
  it('should output typekit script when id prop is present', () => {
    const id = 'abc123';
    const wrapper = shallow(<Typekit id={id} />);
    expect(wrapper.find('script').node.props.dangerouslySetInnerHTML.__html).to.equal(buildScript(id));
  });

  it('should output nothing when id prop is not present', () => {
    const wrapper = shallow(<Typekit />);
    expect(wrapper.html()).to.equal(null);
  });
});
