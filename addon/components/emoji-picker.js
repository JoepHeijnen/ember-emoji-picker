import Ember from 'ember';
import layout from '../templates/components/emoji-picker';
import { PropTypes } from 'ember-prop-types';
import data from 'ember-emoji-picker/data'

export default Ember.Component.extend({
  layout,
  classNameBindings: [':ember-emoji-picker'],

  propTypes: {
    categories: PropTypes.array,
    categoryLabels: PropTypes.object,
    selectedCategory: PropTypes.string
  },

  getDefaultProps() {
    return {
      categories: data.categories,
      categoryLabels: {
        search: 'Search Results',
        recent: 'Frequently Used',
        people: 'Smileys & People',
        nature: 'Animals & Nature',
        foods: 'Food & Drink',
        activity: 'Activity',
        places: 'Travel & Places',
        objects: 'Objects',
        symbols: 'Symbols',
        flags: 'Flags',
        custom: 'Custom'
      },
      selectedCategory: 'People'
    };
  },

  actions: {
    selectCategory(categoryKey) {
      console.log(categoryKey + 'selected');
    }
  }
});
