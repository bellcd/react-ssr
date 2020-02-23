import App from './client/src/app.jsx';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

export default function layout() {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>React Server Side Rendering</title>
    </head>

    <body>
      <div id="app">${ReactDOMServer.renderToString(<App />)}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `;
}