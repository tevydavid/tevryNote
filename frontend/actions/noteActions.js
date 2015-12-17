var Dispatcher = require('../dispatcher/dispatcher.js');

var noteActions = {
  receiveAllNotes: function(notes){
    Dispatcher.dispatch({
      actionType: 'NOTES_RECEIVED',
      notes: notes
    });
  },
  receiveLikedNotes: function (likedNotes){
    Dispatcher.dispatch({
      actionType: 'LIKED_NOTES_RECEIVED',
      likedNotes: likedNotes
    });
  },
  receiveSingleNote: function(note){
    Dispatcher.dispatch({
      actionType: 'SINGLE_NOTE_RECEIVED',
      note: note
    });
  },
  deleteNote: function(note){
    Dispatcher.dispatch({
      actionType: 'NOTE_DELETED',
      note: note
    });
  }
};

module.exports = noteActions;
