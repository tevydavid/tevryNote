var React = require('react'),
    NoteStore = require('../../stores/note'),
    ApiUtil = require('../../util/apiUtil');

var Notes = React.createClass({
  getInitialState: function(){
    return ({notes: NoteStore.all()});
  },
  _onChange: function(){
    this.setState({notes: NoteStore.all()});
  },

  componentDidMount: function(){
    this.noteListener = NoteStore.addListener(this._onChange);
    ApiUtil.fetchAllNotes(this.props.params.id);
  },

  componentWillUnmount: function(){
    this.noteListener.remove();
  },

  componentWillReceiveProps: function(newProps){
    ApiUtil.fetchAllNotes(newProps.params.id);
  },

  render: function(){
    var notes = this.state.notes.map(function(note, idx){
      return <div key={idx}>{note.title} {note.body}</div>
    })
    return(
      <div>{notes}</div>
    )
  }

});

module.exports = Notes;
