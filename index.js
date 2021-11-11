// Dependencies
const postcss = require('postcss');
const lodash = require('lodash');

// Default ant design colors
const replacmentMap = {
    hoverColor: "#40a9ff",
    primaryColor: "#1890ff",
    successColor: "#52c41a",
    warningColor: "#faad14",
    errorColor: "#f5222d",
}

module.exports = postcss.plugin('ant-post-css-theme', (options) => {

    return (css) => {
        css.walkRules((rule) => {
            // Only modifing ant classes
            if (rule.selector.includes('ant')) {
                rule.walkDecls(
                    (decl) => {
                        lodash.forIn(replacmentMap, (value, key) => {
                            // Only replacing if the color exists in the value
                            if (decl.value.includes(value)) {
                                // Adding a fallback value when a css variable is not defined 
                                // Using eather the value passed to the plugin via the option or ant default values
                                // @see https://developer.mozilla.org/en-US/docs/Web/CSS/var()#syntax
                                decl.value = decl.value.replace(value, `var( --${lodash.kebabCase(key)} , ${options.defaults[key] ?? value} )`);
                            }
                        })
                    }
                );
            }
        });
    }
});