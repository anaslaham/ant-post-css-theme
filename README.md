# Ant Post CSS Theme [<img src="http://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][postcss]

[PostCSS] plugin for replacing the default [antd] colors with css variables.

Be able to to change ant design theme in runtime see [CSS Change Variables With JavaScript]

## Demo

<img src="https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif"  height="140" />

## Installation

`$ npm install ant-post-css-theme`

## Usage

**Just add yous css theme variables to your project**

**variables.css**

```css
:root {
  --hover-color: #40a9ff;
  --primary-color: #1890ff;
  --success-color: #52c41a;
  --warning-color: #faad14;
  --error-color: #f5222d;
}
```

**add plugin to postcss**

```JS
postcss([ require('ant-post-css-theme') ])
```

See [PostCSS](https://github.com/postcss/postcss) docs for [examples regarding usage](https://github.com/postcss/postcss#usage).

## Options

### `defaults`

- Type: `object`
- Default: `{}`

This is a another way to pass color values the plugin will provide those colors as a fallback if the css variable is not present see [css var fallback].

e.g:

```JS
defaults: {
 hoverColor: "#40a9ff",
 primaryColor: "#1890ff",
 successColor: "#52c41a",
 warningColor: "#faad14",
 errorColor: "#f5222d",
}
```

<!-- ## Testing

Tests can be run via the following command:

`$ npm run test` -->

<!-- We use mutant-testing to test the resilience of our tests.
Stryker can be run via the following command:

`$ npm run test:mutate` -->

[postcss]: https://github.com/postcss/postcss
[antd]: https://ant.design/
[css change variables with javascript]: https://www.w3schools.com/css/css3_variables_javascript.asp
[css var fallback]: https://developer.mozilla.org/en-US/docs/Web/CSS/var()#syntax
