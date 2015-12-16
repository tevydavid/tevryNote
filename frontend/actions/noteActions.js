var Dispatcher = require('../dispatcher/dispatcher.js');

var noteActions = {
  receiveAllNotes: function(notes){
    Dispatcher.dispatch({
      actionType: 'NOTES_RECEIVED',
      notes: notes
    });
  },
  receiveSingleNote: function(note){
    Dispatcher.dispatch({
      actionType: 'SINGLE_NOTE_RECEIVED',
      note: note
    });
  }
};

module.exports = noteActions;
