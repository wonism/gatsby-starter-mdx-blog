import React, { Component } from 'react';

const author = 'wonism';

export default class HTML extends Component<any> { // eslint-disable-line @typescript-eslint/no-explicit-any
  public render(): React.ReactElement {
    const {
      htmlAttributes,
      headComponents,
      bodyAttributes,
      preBodyComponents,
      body,
      postBodyComponents,
    } = this.props;

    /* eslint-disable react/jsx-props-no-spreading */
    return (
      <html {...htmlAttributes} lang="en">
        <head>
          {headComponents}
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta httpEquiv="Access-Control-Allow-Origin" content="*" />
          <meta httpEquiv="Access-Control-Allow-Headers" content="*" />
          <meta httpEquiv="Access-Control-Expose-Headers" content="*" />
          <meta httpEquiv="Access-Control-Allow-Credentials" content="true" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            id="viewport"
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0, viewport-fit=cover"
          />
          <meta name="author" content={author} />
          <meta property="og:site_name" content="Gatsby Starter MDX Blog" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
        </head>
        <body {...bodyAttributes}>
          {preBodyComponents}
          <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
          {postBodyComponents}
        </body>
      </html>
    );
    /* eslint-enable react/jsx-props-no-spreading */
  }
}
