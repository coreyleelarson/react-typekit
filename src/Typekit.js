import includes from 'lodash/includes';
import split from 'lodash/split';
import merge from 'lodash/merge';
import React, { Component, PropTypes } from 'react';
import buildScript from './utilities/buildScript';

class Typekit extends Component {
  constructor() {
    super();
    this.scriptAttributes = this.scriptAttributes.bind(this);
  }

  componentDidMount() {
    // If typekit has not yet been executed, force it.
    const htmlClasses = document.querySelector('html').className;
    const isLoaded = includes(split(htmlClasses, ' '), 'wf-loading', 'wf-active', 'wf-inactive');
    if (this.script && !isLoaded) {
      const scriptAttributes = this.scriptAttributes();
      const script = document.createElement('script');
      merge(script, scriptAttributes.props);
      script.innerHTML = scriptAttributes.innerHTML;
      this.script.parentNode.replaceChild(script, this.script);
    }
  }

  scriptAttributes() {
    const { kitId, async = false } = this.props;
    return {
      props: {
        async,
        className: 'react-typekit',
      },
      innerHTML: buildScript(kitId)
    };
  }

  render() {
    const scriptAttributes = this.scriptAttributes();
    return this.props.kitId ? (
      <script
        {...scriptAttributes.props}
        dangerouslySetInnerHTML={{ __html: scriptAttributes.innerHTML }}
        ref={ref => this.script = ref}
      />
    ) : false;
  }
}

Typekit.propTypes = {
  async: PropTypes.bool,
  kitId: PropTypes.string,
};

export default Typekit;
