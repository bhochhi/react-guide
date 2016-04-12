'use strict';
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var MoodConstants = require('../constants/MoodConstants');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var _otherSelected = false;

function moodChange(otherChecked){
 _otherSelected = otherChecked;
}


var MoodStore = _.assign({},EventEmitter.prototype,{
  isOtherSelected:function(){
    return _otherSelected;
  },
  emitChange: function(){
    return this.emit(CHANGE_EVENT);
  }
});

AppDispatcher.register(function(action){

    switch(action.actionType){
      case MoodConstants.MOOD_SELECTED:
        console.log('MOOD_SELECTED action: ',action.otherChecked);
        moodChange(action.otherChecked);
        MoodStore.emitChange();
      break;
    }
});

module.exports = MoodStore;
