var ReactDOM = require('react-dom'),
    React = require('react'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    NotebookIndex = require('./components/notebooks/index'),
    NotesIndex = require('./components/notes/index');


var App = React.createClass({
  render: function(){
    return (
        <div>
          <header><h1>TevryNote</h1></header>
          {this.props.children}
        </div>
    );
  }
});

var routes = (
    <Route path="/" component={App}>
      <Route path="notebooks" component={NotebookIndex}>
        <Route path=":id" component={NotesIndex} />
      </Route>
    </Route>
);



document.addEventListener('DOMContentLoaded', function (){
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );
});
