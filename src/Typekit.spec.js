import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Typekit from './Typekit';
import buildScript from './utilities/buildScript';

describe('<Typekit />', () => {
  it('should output typekit script when kitId prop is present', () => {
    const kitId = 'abc123';
    const wrapper = mount(<Typekit kitId={kitId} />);
    expect(wrapper.text()).to.equal(buildScript(kitId));
  });

  it('should output nothing when kitId prop is not present', () => {
    const wrapper = mount(<Typekit />);
    expect(wrapper.html()).to.equal(null);
  });
});
