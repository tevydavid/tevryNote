var Dispatcher = require('../dispatcher/dispatcher.js');

var notebookActions = {
  receiveAllNotebooks: function(notebooks){
    Dispatcher.dispatch({
      actionType: 'NOTEBOOKS_RECEIVED',
      notebooks: notebooks
    });
  }

};

module.exports = notebookActions;
