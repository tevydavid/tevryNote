var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    LikesStore = new Store(AppDispatcher);

var _likedNotes = {};

var resetLikedNotes = function(likedNotes){
  _likedNotes = {};
  likedNotes.forEach(function(note){
    _likedNotes[note.id] = note;
  });
};

LikesStore.all = function(){
  var notes = [];
  for (var id in _likedNotes) {
    notes.push(_likedNotes[id]);
  }
  return notes;
};

LikesStore.any = function(){
  return $.isEmptyObject(_likedNotes);
},

LikesStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case 'LIKED_NOTES_RECEIVED':
      resetLikedNotes(payload.likedNotes);
      break;
    case 'SINGLE_NOTE_RECEIVED':
      if(payload.note.liked){
        _likedNotes[payload.note.id] = payload.note;
      } else {
        delete _likedNotes[payload.note.id];
      }
      break;
    case 'NOTE_DELETED':
      delete _likedNotes[payload.note.id];
      break;
  }

  LikesStore.__emitChange();
};

module.exports = LikesStore;
