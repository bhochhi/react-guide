'use strict';
var AppDispatcher = require('../dispatcher/AppDispatcher');
var MoodConstants = require('../constants/MoodConstants');

var MoodActions = {
  radioSelected: function(otherChecked) {
    AppDispatcher.dispatcher({actionType: MoodConstants.MOOD_SELECTED, otherChecked: otherChecked});
  }
};

module.exports = MoodActions;
