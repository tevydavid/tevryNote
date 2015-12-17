var React = require('react'),
    LikesStore = require('../../stores/likes'),
    NoteIndexItem = require('./indexItem'),
    ApiUtil = require('../../util/apiUtil');

var LikedNotes = React.createClass({
  getInitialState: function(){
    return ({likedNotes: LikesStore.all()});
  },

  _onChange: function(){
    this.setState({likedNotes: LikesStore.all()});
  },

  componentDidMount: function(){
    this.likedNotesListener = LikesStore.addListener(this._onChange);
    ApiUtil.fetchLikedNotes();
  },

  componentWillUnmount: function(){
    this.likedNotesListener.remove();
  },

  render: function(){
    var notes = this.state.likedNotes.map(function(note, idx){
      return <NoteIndexItem key={idx} note={note}/>;
    });
    return(
      <div className='notes-container'>
        {notes}
      </div>
    );
  }

});

module.exports = LikedNotes;
