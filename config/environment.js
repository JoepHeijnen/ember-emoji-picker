/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    'ember-prop-types': {
      requireComponentPropTypes: false,
      throwErrors: true,
      validateOnUpdate: true
    }
  };
};
