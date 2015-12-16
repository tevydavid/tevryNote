var NotebookActions = require('../actions/notebookActions.js');

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
  }
};

module.exports = ApiUtil;
