var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    NoteStore = new Store(AppDispatcher);

var _notes = {};

var resetNotes = function(notes){
  _notes = {};
  notes.forEach(function(note){
    _notes[note.id] = note;
  });
};

NoteStore.all = function(){
  var notes = [];
  for (var id in _notes) {
    notes.push(_notes[id]);
  }
  return notes;
};

NoteStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case 'NOTES_RECEIVED':
      resetNotes(payload.notes);
      break;
    case 'SINGLE_NOTE_RECEIVED':
      _notes[payload.note.id] = payload.note;
      break;
    case 'NOTE_DELETED':
      delete _notes[payload.note.id];
      break;
  }

  NoteStore.__emitChange();
};

module.exports = NoteStore;
