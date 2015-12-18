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
            <div className='create-Notebook button' onClick={this.updateNotebook}><i className="fa fa-thumbs-up"></i></div>
          </div>

          <div className='Notebook-update-title'>
            <textarea type='text'
                      className='Notebook-form-body'
                      valueLink={this.linkState('description')}/>
          </div>

        </form>
      </div>
    )
  }

});

module.exports = UpdateForm;
