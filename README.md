# React Typekit
[![npm](https://img.shields.io/npm/v/react-typekit.svg?style=flat-square)](https://www.npmjs.com/package/react-typekit)
[![Build Status](https://travis-ci.org/coreyleelarson/react-typekit.svg?branch=master)](https://travis-ci.org/coreyleelarson/react-typekit)

This React component will generate the Adobe Typekit script required to load your webfont bundles. Though it can be used anywhere, this works great for isomorphic/universal React applications that render the entire DOM structure in React components.

## Installation
**w/ NPM**
```bash
npm install --save react-typekit
```
**w/ Yarn**
```bash
yarn add react-typekit
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

## Google Chrome SSL Warnings:
If you are loading fonts from Adobe Typekit on your website, and checked your website with DevTools in Chrome after December 1st 2017, you might have seen these notices:

> The SSL certificate used to load resources from https://use.typekit.net will be distrusted in M70. Once distrusted, users will be prevented from loading these resources. See https://g.co/chrome/symantecpkicerts for more information.

> The SSL certificate used to load resources from https://p.typekit.net will be distrusted in M70. Once distrusted, users will be prevented from loading these resources. See https://g.co/chrome/symantecpkicerts for more information.

The notices are not caused by your website’s SSL certificate, but because Adobe Typekit service uses SSL certificates issued by Symantec’s infrastructure, certificates that were found to be not up to industry standards. The link in the notice is very helpful, it’s a [detailed article](https://security.googleblog.com/2017/09/chromes-plan-to-distrust-symantec.html) written on the official Google Security Blog where the notices are thoroughly explained. I recommend you read it.

You don’t need to make any change to your website, or push the panic button. It’s something Adobe has to fix before the release of version 70 of Google Chrome on October 23, 2018. Your font service is not affected in any way until then. For any questions about this I would recommend to contact the Adobe’s support team, it’s not something theme related.
