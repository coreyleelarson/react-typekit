/* eslint react/no-danger: 0 */
import React, { PropTypes } from 'react';
import buildScript from './utilities/buildScript';

const Typekit = ({ kitId }) => {
  const script = buildScript(kitId);
  return kitId ? (<script dangerouslySetInnerHTML={{ __html: script }} />) : false;
};

Typekit.propTypes = {
  kitId: PropTypes.string,
};

export default Typekit;
