var React = require('react'),
    ApiUtil = require('../../util/apiUtil'),
    History = require('react-router').History,
    ReactQuill = require('react-quill'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var noteForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function(){
    return ({title: '', body:''});
  },

  createNote: function(e){
    e.preventDefault();
    ApiUtil.createNote(this.state, this.props.notebookId);
    this.setState({title:'', body: ''});
    this.props.toggleClicked();
  },

  onTextChange: function(value) {
    this.setState({ body:value });
  },


  render: function(){
    return(
      <div className='edit-container' >
        <h1>New Note</h1>
        <form onSubmit={this.createNote} className='note-form'>

          <input type='text'
                    className='note-form-title'
                    valueLink={this.linkState('title')}
                    placeholder='Note Title'/>


          <div className='note-form-buttons'>
            <p className='create-note button' onClick={this.createNote}>
              SAVE</p>
            <p className='cancel button' onClick={this.props.toggleClicked}>
              CANCEL
            </p>
          </div>
          <ReactQuill theme="snow"
                      value={this.state.body}
                      onChange={this.onTextChange}
                      placeholder="Captain's Log, stardate 41153.7..." />


        </form>
      </div>
    );
  }
});

module.exports = noteForm;
