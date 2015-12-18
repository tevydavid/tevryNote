var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var NotebookStore = new Store(AppDispatcher);

var _notebooks = {};

var resetNotebooks = function(notebooks){
  _notebooks = {};
  notebooks.forEach(function(notebook){
    _notebooks[notebook.id] = notebook;
  });
};

NotebookStore.all = function(){
  var notebooks = [];
  for (var id in _notebooks) {
    notebooks.push(_notebooks[id]);
  }
  return notebooks;
};

NotebookStore.find = function(id){
  if (_notebooks[id]) {
    return _notebooks[id];
  } else {
    return {};
  }
};

NotebookStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case 'NOTEBOOKS_RECEIVED':
      resetNotebooks(payload.notebooks);
      break;
    case 'SINGLE_NOTEBOOK_RECEIVED':
      _notebooks[payload.notebook.id] = payload.notebook;
      break;
    case 'NOTEBOOK_DELETED':
      delete _notebooks[payload.notebook.id];
      break;
  }

  NotebookStore.__emitChange();
};

module.exports = NotebookStore;
