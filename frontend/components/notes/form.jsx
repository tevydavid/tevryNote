var React = require('react'),
    ApiUtil = require('../../util/apiUtil'),
    History = require('react-router').History,
    Textarea = require('react-textarea-autosize'),
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

  render: function(){
    return(
        <form onSubmit={this.createNote} className='note-form'>

          <input type='text'
                    className='note-form-title'
                    valueLink={this.linkState('title')}
                    placeholder='Note Title'/>

          <div className='note-form-buttons'>
            <p className='create-note button' onClick={this.createNote}>
              <i className="fa fa-thumbs-up"></i></p>
            <p className='cancel button' onClick={this.props.toggleClicked}>
              <i className="fa fa-times"></i>
            </p>
          </div>

          <Textarea className='note-form-body'
                    valueLink={this.linkState('body')}
                    placeholder="Captain's Log, stardate 41153.7..."/>


        </form>
    );
  }
});

module.exports = noteForm;
