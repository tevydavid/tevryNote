var React = require('react'),
    ApiUtil = require('../../util/apiUtil');

var NoteIndexItem = React.createClass({

  toggleLike: function(e){
    e.preventDefault;
    var note = this.props.note;
    note.liked = !note.liked;
    ApiUtil.updateNote(note);
  },

  render: function(){
    var heartStatus = this.props.note.liked ? '♥︎' : '♡';
    return (
      <div className='note-container'>
        <div className='note-header group'>
          <p className='note-title'>{this.props.note.title}</p>
          <p className='liked' onClick={this.toggleLike}>{heartStatus}</p>
        </div>
        <div className='note-body'>
          {this.props.note.body}
        </div>
      </div>
    );
  }
});

module.exports = NoteIndexItem;
