var React = require ('react'),
    LinkedStateMixin = require ('react-addons-linked-state-mixin'),
    NoteStore = require('../../stores/note'),
    ApiUtil = require('../../util/apiUtil');

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
      <div className='note-update-container'>
        <form onSubmit={this.updateNote}>

          <input type='text'
                    className='note-form-title'
                    valueLink={this.linkState('title')}/>

          <div className='note-button group'>
            <p className='cancel button' onClick={this.props.toggleClicked}>
              <i className="fa fa-times"></i>
            </p>
            <div className='create-note button' onClick={this.updateNote}><i className="fa fa-thumbs-up"></i></div>
          </div>

          <div className='note-form-description'>
            <textarea type='text'
                      className='note-form-body'
                      valueLink={this.linkState('body')}/>
          </div>

        </form>
      </div>
    )
  }

});

module.exports = UpdateForm;
