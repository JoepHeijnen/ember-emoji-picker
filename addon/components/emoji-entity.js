import Ember from 'ember';
import layout from '../templates/components/emoji-entity';
import {PropTypes} from 'ember-prop-types';
import getEmojiData from 'ember-emoji-picker/utils/data-utils'

export default Ember.Component.extend({
  layout,
  classNameBindings: [':emoji-entity'],

  propTypes: {
    emoji: PropTypes.string
  },

  emojiData: Ember.computed('emoji', function () {
    return getEmojiData(this.get('emoji'))
  })
});
