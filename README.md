# React Typekit

This React component will generate the Adobe Typekit script required to load your webfont bundles. Though it can be used anywhere, this works great for isomorphic/universal React applications that render the entire DOM structure in React components.

## Installation
```
npm install --save react-typekit
```

## Usage
Pass your Typekit Kit ID as a prop to the Typekit component. You can find this ID by logging into [Adobe Typekit](https://typekit.com/).
```javascript
import React from 'react';
import Typekit from 'react-typekit';

const HtmlLayout = () => (
  <html>
    <body>
      <h1>My Example React Component</h1>
      <Typekit kitId="abc123" />
    </body>
  </html>
);

export default HtmlLayout;
```
