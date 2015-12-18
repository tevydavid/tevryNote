var React = require('react'),
    NoteStore = require('../../stores/note'),
    NoteIndexItem = require('./indexItem'),
    ApiUtil = require('../../util/apiUtil');

var SearchResults = React.createClass({
  getInitialState: function(){
    return ({searchResults: NoteStore.all()});
  },

  _onChange: function(){
    this.setState({searchResults: NoteStore.all()});
  },

  componentDidMount: function(){
    this.searchResultsListener = NoteStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    this.searchResultsListener.remove();
  },

  render: function(){
    var notes = this.state.searchResults.map(function(note, idx){
      return <NoteIndexItem key={idx} note={note}/>;
    });
    return(
      <div className='notes-container'>
        SEARCH RESULTS
        {notes}
      </div>
    );
  }

});

module.exports = SearchResults;
