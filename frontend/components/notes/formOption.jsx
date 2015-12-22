var React = require('react'),
    NoteForm = require('./form');

var NoteFormOption = React.createClass({
  getInitialState: function(){
    return({clicked: false});
  },

  toggleClicked: function(){
    this.setState({clicked: !this.state.clicked});
  },

  componentWillReceiveProps: function(){
    this.setState({clicked: false});
  },

  render: function(){
    if (this.state.clicked) {
      return (

        <NoteForm toggleClicked={this.toggleClicked} notebookId = {this.props.notebookId}/>

      );
    } else {
      return (
        <div className='note-form-closed'>
          <div className='new-note button' onClick={this.toggleClicked}>
            <span className='glyphicon glyphicon-pencil' aria-hidden='true'/>&nbsp; New Note
          </div>
        </div>
      );
    }
  }

});

module.exports = NoteFormOption;
