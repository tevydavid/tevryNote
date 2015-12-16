var React = require('react'),
    ApiUtil = require('../../util/apiUtil'),
    History = require('react-router').History,
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var noteForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function(){
    return ({title: '', body:''})
  },

  createNote: function(e){
    e.preventDefault();
    ApiUtil.createNote(this.state, this.props.notebookId);
    this.setState({title:'', body: ''})
  },

  render: function(){
    return(
      <div className='note-form-container'>
        <form onSubmit={this.createNote}>
          <div>
            <input type='text'
                    className='note-form-title'
                    valueLink={this.linkState('title')}
                    placeholder='Note Title'/>
          </div>
          <div>
            <textarea type='text'
                      className='note-form-body'
                      valueLink={this.linkState('body')}
                      placeholder="Captain's Log, stardate 41153.7..."/>
          </div>
          <button className='note-form-button'>Create Note</button>
        </form>
      </div>
    );
  }
});

module.exports = noteForm;
