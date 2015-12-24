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
        <div className='note-form-closed button' onClick={this.toggleClicked}>
            <i className='fa fa-pencil fa-lg'/>&nbsp; New Note
        </div>
      );
    }
  }

});

module.exports = NoteFormOption;
