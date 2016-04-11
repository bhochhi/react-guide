var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var MoodConstants = requre('../constants/MoodConstants');
var _ = require('lodash');

var CHANGE_EVENT = 'change';




function moodChange(otherChecked){

}


var MoodStore = _.assign({},EventEmitter.prototype,{

  emitChange:function(){
    return this.emit(CHANGE_EVENT);
  }
});

AppDispatcher.register(function(action){

    switch(action.actionType){
      case MoodConstants.MOOD_SELECTED:
        console.log('MOOD_SELECTED action: ',action.otherChecked);
      break;
    }
});
