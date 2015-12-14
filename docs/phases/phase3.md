# Phase 3: Notebooks and Tags (2 days)

## Rails
### Models
* Notebook
* Note (add Hearts and Importance)

### Controllers
* Api::NotebooksController (create, destroy, index, show, update)

### Views
* notebooks/index.json.jbuilder
* notebooks/show.json.jbuilder


## Flux
### Views (React Components)
* NotebooksIndex
  - NotebookIndexItem
* HeartComponent

### Stores
* Notebook

### Actions
* ApiActions.receiveAllNotebooks -> triggered by ApiUtil
* ApiActions.receiveSingleNotebook
* ApiActions.deleteNotebook
* NotebookActions.fetchAllNotebooks -> triggers ApiUtil
* NotebookActions.fetchSingleNotebook
* NotebookActions.createNotebook
* NotebookActions.editNotebook
* NotebookActions.destroyNotebook

### ApiUtil
* ApiUtil.fetchAllNotebooks
* ApiUtil.fetchSingleNotebook
* ApiUtil.createNotebook
* ApiUtil.editNotebook
* ApiUtil.destroyNotebook

## Gems/Libraries
