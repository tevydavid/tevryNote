var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    NoteStore = new Store(AppDispatcher);

var _notes = [];

var resetNotes = function(notes){
  _notes = notes;
}

NoteStore.all = function(){
  return _notes;
}

NoteStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case 'NOTES_RECEIVED':
      resetNotes(payload.notes);
      break;
    case 'SINGLE_NOTE_RECEIVED':
      _notes.unshift(payload.note);
      break;
  }

  NoteStore.__emitChange();
}

module.exports = NoteStore;
