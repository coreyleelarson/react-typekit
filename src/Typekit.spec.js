/* eslint no-underscore-dangle: 0 */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Typekit from './Typekit';
import buildScript from './utilities/buildScript';

describe('<Typekit />', () => {
  it('should output typekit script when kitId prop is present', () => {
    const kitId = 'abc123';
    const wrapper = shallow(<Typekit kitId={kitId} />);
    expect(wrapper.find('script').node.props.dangerouslySetInnerHTML.__html).to.equal(buildScript(kitId));
  });

  it('should output nothing when kitId prop is not present', () => {
    const wrapper = shallow(<Typekit />);
    expect(wrapper.html()).to.equal(null);
  });
});
