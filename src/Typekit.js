import includes from 'lodash/includes';
import split from 'lodash/split';
import React, { Component } from 'react';
import buildScript from './utilities/buildScript';

class Typekit extends Component {
  componentDidMount() {
    // If typekit has not yet been executed, force it.
    const htmlClasses = document.querySelector('html').className;
    const isLoaded = includes(split(htmlClasses, ' '), 'wf-loading', 'wf-active', 'wf-inactive');
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

export default Typekit;
