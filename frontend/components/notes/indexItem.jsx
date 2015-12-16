var React = require('react'),
    ApiUtil = require('../../util/apiUtil');

var NoteIndexItem = React.createClass({

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
    heartClass += ' like botton';
    return (
      <div className='note-container'>
        <div className='note-header group'>
          <p className='note-title'>{this.props.note.title}</p>
          <p className='note-delete button' onClick={this.deleteNote}>✗</p>
          <i className={heartClass} onClick={this.toggleLike}/>
        </div>
        <div className='note-body group'>
          {this.props.note.body}
        </div>
      </div>
    );
  }
});

module.exports = NoteIndexItem;
