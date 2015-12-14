# Phase 4: Allow Complex Styling in Notes (1 day)

## Rails
### Models
* Tag (belongsTo Note)
* Note (hasMany Tags)

### Controllers
* Tag Controller

### Views
* Tags/show.json

## Flux
### Views (React Components)
* Search Bar

### Stores
* NoteStore

### Actions
* (uses api action recieveAllNotes)
* ApiActions.deleteTag
* TagActions.fetchAllNotesWithTag -> triggers ApiUtil
* TagActions.createTag
* TagActions.destroyTag

### ApiUtil
* ApiUtil.fetchAllNotesWithTag
* ApiUtil.createTag
* ApiUtil.destroyTag


## Gems/Libraries
