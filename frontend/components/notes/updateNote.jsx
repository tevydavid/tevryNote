var React = require ('react'),
    LinkedStateMixin = require ('react-addons-linked-state-mixin'),
    NoteStore = require('../../stores/note'),
    ApiUtil = require('../../util/apiUtil'),
    Textarea = require('react-textarea-autosize');

var UpdateForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return(NoteStore.find(this.props.noteId));
  },

  updateNote: function(){
    ApiUtil.updateNote(this.state);
    this.props.toggleClicked();
  },

  render: function (){
    return (
      <form onSubmit={this.updateNote} className='note-form'>

        <input type='text'
                  className='note-form-title'
                  valueLink={this.linkState('title')}/>

        <div className='note-form-buttons'>

          <p className='create-note button' onClick={this.updateNote}>
            <i className="fa fa-thumbs-up"></i></p>

          <p className='cancel button' onClick={this.props.toggleClicked}>
            <i className="fa fa-times"></i>
          </p>
          
        </div>

        <Textarea className='note-form-body'
                  valueLink={this.linkState('body')}/>

      </form>
    );
  }

});

module.exports = UpdateForm;
