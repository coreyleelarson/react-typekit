import { filter } from 'lodash';
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Typekit from './Typekit';
import buildScript from './utilities/buildScript';

describe('<Typekit />', () => {
  it('should output typekit script when kitId prop is present', () => {
    const kitId = 'abc123';
    mount(<Typekit kitId={kitId} />);
    const matches = filter(document.querySelectorAll('script'), (script) => script.innerHTML === buildScript(kitId));
    expect(matches).to.have.length(1);
  });

  it('should output nothing when kitId prop is not present', () => {
    const wrapper = mount(<Typekit />);
    expect(wrapper.html()).to.equal(null);
  });
});
