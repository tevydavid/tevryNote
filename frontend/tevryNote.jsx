var ReactDOM = require('react-dom'),
    React = require('react'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Header = require('./components/header'),
    SearchBar = require('./components/notes/searchBar'),
    NotebookIndex = require('./components/notebooks/index'),
    LikedNotes = require('./components/notes/likedNotes'),
    SearchResults =  require('./components/notes/searchResults'),
    NotesIndex = require('./components/notes/index');


var App = React.createClass({
  render: function(){
    return (

        <div className="body-container group">
          <Header/>
          <NotebookIndex />
          {this.props.children}
        </div>

    );
  }
});

var routes = (
    <Route path="/" component={App}>
        <Route path="notebooks/:id" component={NotesIndex} />
        <Route path='likes' component={LikedNotes} />
        <Route path='search' component={SearchResults} />
    </Route>
);



document.addEventListener('DOMContentLoaded', function (){
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );
});
