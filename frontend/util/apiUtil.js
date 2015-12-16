var NotebookActions = require('../actions/notebookActions'),
    NoteActions = require('../actions/noteActions');

var ApiUtil = {
  fetchAllNotebooks: function(){
    $.ajax({
      url: 'api/notebooks',
      type: 'GET',
      success: function (notebooks) {
        NotebookActions.receiveAllNotebooks(notebooks);
      }
    })
  },

  createNotebook: function(notebook, callback){
    $.ajax({
      url: 'api/notebooks',
      type: 'POST',
      data: {notebook: notebook},
      success: function(notebook){
        NotebookActions.receiveSingleNotebook(notebook);
        callback && callback(notebook.id);
      }
    })
  },

  fetchAllNotes: function(notebookId){
    $.ajax({
      url: 'api/notebooks/' + notebookId,
      type: 'GET',
      success: function (notes) {
        NoteActions.receiveAllNotes(notes);
      }
    })
  }
};

module.exports = ApiUtil;
