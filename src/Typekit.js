/* eslint react/no-danger: 0 */
import React, { PropTypes } from 'react';
import buildScript from './utilities/buildScript';

const Typekit = ({ id }) => {
  const script = buildScript(id);
  return id ? (<script dangerouslySetInnerHTML={{ __html: script }} />) : false;
};

Typekit.propTypes = {
  id: PropTypes.string,
};

export default Typekit;
