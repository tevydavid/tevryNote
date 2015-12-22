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
    if (window.confirm('Do you really want to delete this notebook?')){
      ApiUtil.deleteNotebook(this.state, function(){
        this.history.pushState(null, "/", {});
      }.bind(this));
    }
  },

  render: function (){
    return (
        <form className='update-notebook-form' onSubmit={this.updateNotebook}>

          <input type='text'
                    className='update-notebook-title'
                    valueLink={this.linkState('title')}/>

          <div className='update-notebook-buttons'>
            <p className='cancel button' onClick={this.props.toggleClicked}>
              <i className="fa fa-times"></i>
            </p>

            <p className='delete-notebook button' onClick={this.deleteNotebook}>
              <span className='glyphicon glyphicon-trash' aria-hidden ='true'/>
            </p>

            <p className='update-notebook button' onClick={this.updateNotebook}><i className="fa fa-thumbs-up"></i></p>
          </div>

          <textarea
            className='update-notebook-description'
            valueLink={this.linkState('description')}/>


        </form>
    );
  }

});

module.exports = UpdateForm;
