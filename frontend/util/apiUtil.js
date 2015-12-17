var NotebookActions = require('../actions/notebookActions'),
    NoteActions = require('../actions/noteActions');

var ApiUtil = {
  fetchAllNotebooks: function () {
    $.ajax({
      url: 'api/notebooks',
      type: 'GET',
      success: function (notebooks) {
        NotebookActions.receiveAllNotebooks(notebooks);
      }
    });
  },

  fetchSingleNotebook: function (notebookId) {
    $.ajax({
      url: 'api/notebooks/' + notebookId,
      type: 'GET',
      success: function (notebook) {
        NotebookActions.receiveSingleNotebook(notebook);
      }
    })
  },

  createNotebook: function (notebook, callback) {
    $.ajax({
      url: 'api/notebooks',
      type: 'POST',
      data: {notebook: notebook},
      success: function (notebook) {
        NotebookActions.receiveSingleNotebook(notebook);
        callback && callback(notebook.id);
      }
    });
  },

  updateNotebook: function (notebook) {
    $.ajax({
      url: 'api/notebooks/' + notebook.id,
      type: 'PUT',
      data: {notebook: notebook},
      success: function (notebook) {
        NoteActions.receiveSingleNotebook(notebook);
      }
    });
  },

  fetchAllNotes: function (notebookId) {
    $.ajax({
      url: 'api/notebooks/' + notebookId + '/notes',
      type: 'GET',
      success: function (notes) {
        NoteActions.receiveAllNotes(notes);
      }
    });
  },

  createNote: function (note, notebookId) {
    $.ajax({
      url: 'api/notebooks/' + notebookId +'/notes',
      type: 'POST',
      data: {note: note},
      success: function (note) {
        NoteActions.receiveSingleNote(note);
      }
    });
  },

  updateNote: function (note) {
    $.ajax({
      url: 'api/notes/' + note.id,
      type: 'PUT',
      data: {note: note},
      success: function (note) {
        NoteActions.receiveSingleNote(note);
      }
    });
  },

  deleteNote: function(note){
    $.ajax({
      url: 'api/notes/' + note.id,
      type: 'DELETE',
      data: {note: note},
      success: function (note) {
        NoteActions.deleteNote(note);
      }
    });
  },

  fetchLikedNotes: function(){
    $.ajax({
      url: 'api/notebooks/liked',
      type: 'GET',
      success: function (likedNotes) {
        NoteActions.receiveLikedNotes(likedNotes);
      }
    });
  }

};

module.exports = ApiUtil;
