import intersection from 'lodash/intersection';
import split from 'lodash/split';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import buildScript from './utilities/buildScript';

class Typekit extends Component {
  componentDidMount() {
    // If typekit has not yet been executed, force it.
    const htmlClasses = split(document.querySelector('html').className, ' ');
    const typekitClasses = ['wf-loading', 'wf-active', 'wf-inactive'];
    const isLoaded = intersection(htmlClasses, typekitClasses).length > 0;
    if (this.script && !isLoaded) {
      const { kitId } = this.props;
      const script = document.createElement('script');
      script.innerHTML = buildScript(kitId);
      this.script.parentNode.replaceChild(script, this.script);
    }
  }

  render() {
    const { kitId } = this.props;
    return this.props.kitId ? (
      <script
        dangerouslySetInnerHTML={{ __html: buildScript(kitId) }}
        ref={ref => this.script = ref}
      />
    ) : false;
  }
}

Typekit.propTypes = {
  kitId: PropTypes.string
};

export default Typekit;
