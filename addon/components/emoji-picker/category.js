import Ember from 'ember';
import layout from '../../templates/components/emoji-picker/category';
import { PropTypes } from 'ember-prop-types';

export default Ember.Component.extend({
  layout,
  classNameBindings: [':eep-category'],

  propTypes: {
    category: PropTypes.object.isRequired,
    categoryLabels: PropTypes.object.isRequired,
  }
});
