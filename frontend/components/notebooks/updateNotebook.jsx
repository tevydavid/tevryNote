var React = require ('react'),
    LinkedStateMixin = require ('react-addons-linked-state-mixin'),
    NotebookStore = require('../../stores/notebook'),
    History = require('react-router').History,
    ApiUtil = require('../../util/apiUtil');

var UpdateForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function(){
    return(NotebookStore.find(this.props.notebookId));
  },

  updateNotebook: function(){
    ApiUtil.updateNotebook(this.state);
    this.props.toggleClicked();
  },

  componentWillReceiveProps: function(newProps){
    this.props.toggleClicked();
  },

  deleteNotebook: function(e){
    e.preventDefault;
    if (window.confirm("Do you really want to delete this notebook? \nThis will also delete all the notes in this notebook.")){
      ApiUtil.deleteNotebook(this.state, function(){
        this.history.pushState(null, "/", {});
      }.bind(this));
    }
  },

  render: function (){
    return (
        <form className='update-notebook-form' onSubmit={this.updateNotebook}>

          <input type='text'
                    id='update-notebook-title'
                    valueLink={this.linkState('title')}/>
          <input type='text'
                    id='update-notebook-description'
                    valueLink={this.linkState('description')}/>

          <p className='save button' onClick={this.updateNotebook}>
          SAVE</p>

          <p className='cancel button' onClick={this.props.toggleClicked}>
          CANCEL</p>

          <p className='delete button' onClick={this.deleteNotebook}>
          DELETE</p>

        </form>
    );
  }

});

module.exports = UpdateForm;
