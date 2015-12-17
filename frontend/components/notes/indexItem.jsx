var React = require('react'),
    ApiUtil = require('../../util/apiUtil'),
    UpdateForm = require('./UpdateNote');

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
    var heartClass = this.props.note.liked ? 'fa fa-heart' : 'fa fa-heart-o';
    if (this.state.clicked){
      return <UpdateForm noteId={this.props.note.id} toggleClicked={this.toggleClicked}/>;
    } else {
      return (
        <div className='note-container'>
          <div className='note-header group'>
            <p className='note-title' onDoubleClick={this.toggleClicked}><i className="fa fa-sticky-note"></i>&nbsp; {this.props.note.title}</p>
            <p className='note-delete button' onClick={this.deleteNote}>✗</p>
            <p className='liked button'><i className={heartClass} onClick={this.toggleLike}/></p>
          </div>
          <div className='note-body group' onDoubleClick={this.toggleClicked}>
            {this.props.note.body}
          </div>
        </div>
      );
    }
  }
});

module.exports = NoteIndexItem;
