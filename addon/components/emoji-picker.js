import Ember from 'ember';
import layout from '../templates/components/emoji-picker';
import { PropTypes } from 'ember-prop-types';
import data from 'ember-emoji-picker/data'

export default Ember.Component.extend({
  layout,
  classNameBindings: [':ember-emoji-picker'],

  propTypes: {
    emojis: PropTypes.array,
    categories: PropTypes.array,
    categoryLabels: PropTypes.object,
    selectedCategory: PropTypes.string,
    searchQuery: PropTypes.string
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

  isSearching: Ember.computed.notEmpty('searchQuery'),
  filteredEmojis: Ember.computed('searchQuery', function(){
    return []
  }),

  hasSearchResults: Ember.computed.gt('filteredEmojis.length', 0),

  actions: {
    doSelectCategory(categoryKey) {
      console.log(categoryKey + 'selected');
    },

    doFilterEmoji(searchQuery) {
      console.log('filter emoji for: ', searchQuery);
      this.set('searchQuery', searchQuery);
    }
  }
});
