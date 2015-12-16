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
      <form onSubmit={this.createNote}>
        <div>
          <label>Title:</label>
          <input type='text' valueLink={this.linkState('title')}/>
        </div>
        <div>
          <label>Description:</label>
          <input type='text' valueLink={this.linkState('body')}/>
        </div>
        <button>Create Note</button>
      </form>
    );
  }
});

module.exports = noteForm;
