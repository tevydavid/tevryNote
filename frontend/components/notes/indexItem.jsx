var React = require('react'),
    ApiUtil = require('../../util/apiUtil'),
    UpdateForm = require('./updateNote');

var NoteIndexItem = React.createClass({
  getInitialState: function(){
    return({clicked: false});
  },

  toggleClicked: function(){
    this.setState({clicked: !this.state.clicked});
  },

  toggleLike: function(e){
    e.preventDefault;
    var note = this.props.note;
    note.liked = !note.liked;
    ApiUtil.updateNote(note);
  },

  deleteNote: function(e){
    e.preventDefault;
    if (window.confirm('Do you really want to delete this note?')){
      ApiUtil.deleteNote(this.props.note);
    }
  },

  render: function(){
    var starClass = this.props.note.liked ? 'glyphicon glyphicon-star' : 'glyphicon glyphicon-star-empty';
    if (this.state.clicked){
      return <UpdateForm noteId={this.props.note.id} toggleClicked={this.toggleClicked}/>;
    } else {
      return (
        <div className='note-container'>
          <div className='note-header group'>
            <p className='note-title' onDoubleClick={this.toggleClicked}>{this.props.note.title}</p>
            <p className='note-delete button' onClick={this.deleteNote}>
              <span className='glyphicon glyphicon-trash' aria-hidden ='true'/>
            </p>
            <p className='star button' onClick={this.toggleLike}>
              <span className={starClass} aria-hidden="true" /></p>
          </div>
          <div className='note-body' onDoubleClick={this.toggleClicked}>
            {this.props.note.body}
          </div>
        </div>
      );
    }
  }
});

module.exports = NoteIndexItem;
