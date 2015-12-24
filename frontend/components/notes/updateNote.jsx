var React = require ('react'),
    LinkedStateMixin = require ('react-addons-linked-state-mixin'),
    NoteStore = require('../../stores/note'),
    ApiUtil = require('../../util/apiUtil'),
    ReactQuill = require('react-quill');

var UpdateForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return(NoteStore.find(this.props.noteId));
  },

  updateNote: function(){
    ApiUtil.updateNote(this.state);
    this.props.toggleClicked();
  },

  onTextChange: function(value) {
    this.setState({ body:value });
  },

  render: function (){
    return (
      <div className='edit-container' >
        <h1>Edit Note</h1>
        <form onSubmit={this.updateNote} className='note-form'>

          <input type='text'
                    className='note-form-title'
                    valueLink={this.linkState('title')}
                    placeholder='Note Title'/>


          <div className='note-form-buttons'>
            <p className='create-note button' onClick={this.updateNote}>
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

module.exports = UpdateForm;
