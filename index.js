/* eslint-env node */
'use strict';

module.exports = {
  name: 'precisionnutrition',

  rules: {

  },

  configurations: {
    recommended: {
      extends: 'octane',
      rules: {
        'attribute-indentation': true,
        'eol-last': 'always',
        'no-trailing-spaces': true,
      }
    }
  }
};
