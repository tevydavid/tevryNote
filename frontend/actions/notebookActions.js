var Dispatcher = require('../dispatcher/dispatcher.js');

var notebookActions = {
  receiveAllNotebooks: function(notebooks){
    Dispatcher.dispatch({
      actionType: 'NOTEBOOKS_RECEIVED',
      notebooks: notebooks
    });
  },
  receiveSingleNotebook: function(notebook){
    Dispatcher.dispatch({
      actionType: 'SINGLE_NOTEBOOK_RECEIVED',
      notebook: notebook
    });
  },
  
  deleteNotebook: function(notebook){
    Dispatcher.dispatch({
      actionType: 'NOTEBOOK_DELETED',
      notebook: notebook
    });
  }
};

module.exports = notebookActions;
