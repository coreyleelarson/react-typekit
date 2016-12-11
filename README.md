# React Typekit

This React component will generate the Adobe Typekit script required to load your webfont bundles. Though it can be used anywhere, this works great for isomorphic/universal React applications that render the entire DOM structure in React components.

## Installation
```
npm install --save react-typekit
```

## Usage
```javascript
import React from 'react';
import Typekit from 'react-typekit';

const HtmlLayout = () => (
  <html>
    <body>
      <h1>My Example React Component</h1>
      <Typekit id="abc123" />
    </body>
  </html>
);

export default HtmlLayout;
```
