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
};

module.exports = ApiUtil;
