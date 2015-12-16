var React = require('react'),
    ApiUtil = require('../../util/apiUtil'),
    History = require('react-router').History,
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var notebookForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function(){
    return ({title: '', description:''})
  },

  createNotebook: function(e){
    e.preventDefault();
    ApiUtil.createNotebook(this.state, function(id){
      this.history.pushState(null, "/notebooks/" + id, {})
    }.bind(this));
    this.setState({title:'', description: ''})
  },

  render: function(){
    return(
      <form onSubmit={this.createNotebook}>
        <div>
          <label>Title:</label>
          <input type='text' valueLink={this.linkState('title')}/>
        </div>
        <div>
          <label>Description:</label>
          <input type='text' valueLink={this.linkState('description')}/>
        </div>
        <button>Create Notebook</button>
      </form>
    );
  }
});

module.exports = notebookForm;
