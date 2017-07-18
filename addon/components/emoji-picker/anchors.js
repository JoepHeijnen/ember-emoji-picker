import Ember from 'ember';
import layout from '../../templates/components/emoji-picker/anchors';
import { PropTypes } from 'ember-prop-types';
import svgs from 'ember-emoji-picker/data/svgs';

export default Ember.Component.extend({
  layout,
  classNameBindings: [':eep-anchors'],

  propTypes: {
    categories: PropTypes.array.isRequired,
    categoryLabels: PropTypes.object.isRequired,
    selectedCategory: PropTypes.string.isRequired,
    svgs: PropTypes.object
  },

  getDefaultProps() {
    return {
      svgs: svgs
    };
  },

  actions: {
    selectCategory(categoryName) {
      this.set('selectedCategory', categoryName)
      console.log(categoryName + ' selected');
    }
  }
});
