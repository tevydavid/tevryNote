var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var NotebookStore = new Store(AppDispatcher);

var _notebooks = [];

var resetNotebooks = function(notebooks){
  _notebooks = notebooks;
}

NotebookStore.all = function(){
  return _notebooks;
}

NotebookStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case 'NOTEBOOKS_RECEIVED':
      resetNotebooks(payload.notebooks);
      break;
  }

  NotebookStore.__emitChange();
}

module.exports = NotebookStore;
