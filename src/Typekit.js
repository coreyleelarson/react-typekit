import { Component, PropTypes } from 'react';
import buildScript from './utilities/buildScript';

class Typekit extends Component {
  componentDidMount() {
    const is_rendered = document.querySelectorAll('.react-typekit').length > 0;
    if (!is_rendered) {
      const { kitId } = this.props;
      const script = document.createElement('script');
      script.className = 'react-typekit';
      script.async = true;
      script.innerHTML = buildScript(kitId);
      document.body.appendChild(script);
    }
  }

  render() {
    return false;
  }
}

Typekit.propTypes = {
  kitId: PropTypes.string,
};

export default Typekit;
