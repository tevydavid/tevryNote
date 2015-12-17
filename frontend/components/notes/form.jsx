var React = require('react'),
    ApiUtil = require('../../util/apiUtil'),
    History = require('react-router').History,
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
      <div className='note-form-container'>
        <form onSubmit={this.createNote}>

          <input type='text'
                    className='note-form-title'
                    valueLink={this.linkState('title')}
                    placeholder='Note Title'/>

          <div className='note-button group'>
            <p className='cancel button' onClick={this.props.toggleClicked}>
              <i className="fa fa-times"></i>
            </p>
            <div className='create-note button' onClick={this.createNote}><i className="fa fa-thumbs-up"></i></div>
          </div>

          <div className='note-form-description'>
            <textarea type='text'
                      className='note-form-body'
                      valueLink={this.linkState('body')}
                      placeholder="Captain's Log, stardate 41153.7..."/>
          </div>

        </form>
      </div>
    );
  }
});

module.exports = noteForm;
