# Notably

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Notably is a web application inspired by Evernote built using Ruby on Rails
and React.js. Notably allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, edit, and delete notes
- [ ] Organize notes within Notebooks
- [ ] Flag Favorite Notes
- [ ] Click notes to flag them as important
- [ ] Tag notes with multiple tags and search notes by tag
- [ ] Search through notes for blocks of text
- [ ] Special sections for old notes.

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Note Model and JSON API (1.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a basic landing page after signup that will contain the
container for the application's root React component. Before building out the
front end, I will begin by setting up a full JSON API for Notes.

[Details][phase-one]

### Phase 2: Flux Architecture and Note CRUD (2.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a Note store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the Notes `Index`, `IndexItem` and `Form`. At the end of Phase 2,
Notes can be created, read, edited and destroyed in the browser. Notes should
save to the database when the form loses focus or is left idle after editing.


[Details][phase-two]

### Phase 3: Notebooks, Hearts, and Checks (2 days)

Phase 3 adds organization to the Notes. Notes belong to a Notebook, which has
its own `Index` view. Create JSON API for Notebooks. Notes can also be hearted,
which will also show them in a special notebook for hearted notes. Notes can also
be clicked to toggle their importance. Important notes will be shown in bold type.



[Details][phase-three]

### Phase 4: Tagging and Search (1 day)

Notes can also now be tagged with multiple tags. Users can bring up notes in
a separate `SearchIndex` view by searching for their tags. Once the tag search
is implemented, I will extend the search to include options to search for tags
or a fuzzy search through every Note's content.



[Details][phase-four]

### Phase 5: Old Notes (1 day)

Phase five will be implementation of another special notebook for old
notes. This notebook will serve as a way for users to clear up their notebooks.
The old notes notebook will have an option to delete, keep, or edit notes.

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (2 day)

Style is everything! Create a guest login account and seed data.
Transitions and animated guest user login.


### Bonus Features (TBD)
- [ ] Prettify transitions
- [ ] Use javascript library for cleaner tag selection
- [ ] Changelogs for Notes
- [ ] Pagination / infinite scroll for Notes Index


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
