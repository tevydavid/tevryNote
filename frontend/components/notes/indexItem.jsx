var React = require('react');

var NoteIndexItem = React.createClass({

  render: function(){
    return (
      <div>
        <p>Title: {this.props.note.title}</p>
        <p>Body: {this.props.note.body}</p>
      </div>
    )
  }
});

module.exports = NoteIndexItem;
