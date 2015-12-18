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

  deleteNotebook: function(){
    ApiUtil.deleteNotebook(this.state, function(){
      this.history.pushState(null, "/", {});
    }.bind(this));
  },

  render: function (){
    return (
      <div className='Notebook-update-container'>
        <form onSubmit={this.updateNotebook}>

          <input type='text'
                    className='Notebook-form-title'
                    valueLink={this.linkState('title')}/>

                  <div className='Notebook-button group'>
            <p className='cancel button' onClick={this.props.toggleClicked}>
              <i className="fa fa-times"></i>
            </p>
            <p className='delete-notebook button' onClick={this.deleteNotebook}>DELETE_THIS_NOTEBOOK</p>
            <p className='create-Notebook button' onClick={this.updateNotebook}><i className="fa fa-thumbs-up"></i></p>
          </div>

          <div className='Notebook-update-title'>
            <input type='text'
                      className='Notebook-form-body'
                      valueLink={this.linkState('description')}/>
          </div>

        </form>
      </div>
    );
  }

});

module.exports = UpdateForm;
