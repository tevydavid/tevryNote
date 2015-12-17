var React = require('react'),
    NoteStore = require('../../stores/note'),
    NoteIndexItem = require('./indexItem'),
    NoteFormOption = require('./formOption'),
    ApiUtil = require('../../util/apiUtil');

var NotesIndex = React.createClass({
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
      return <NoteIndexItem key={idx} note={note}/>;
    });
    return(
      <div className='notes-container'>
        <NoteFormOption notebookId={this.props.params.id}/>
        {notes}
      </div>
    );
  }

});

module.exports = NotesIndex;
