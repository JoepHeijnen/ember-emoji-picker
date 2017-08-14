import Ember from 'ember';
import layout from '../../templates/components/emoji-picker/search';
import {PropTypes} from 'ember-prop-types';

export default Ember.Component.extend({
  layout,
  classNameBindings: [':eep-search'],

  propTypes: {
    searchQuery: PropTypes.string,
    onSearch: PropTypes.func
  },

  onSearchQueryChange: Ember.observer('searchQuery', function () {
    Ember.run.debounce(this, this.onSearch, this.get('searchQuery'), 250);
  })

});
