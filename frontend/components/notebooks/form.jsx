var React = require('react'),
    ApiUtil = require('../../util/apiUtil'),
    History = require('react-router').History,
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var NotebookForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function(){
    return ({title: '', description:''});
  },

  createNotebook: function(e){
    e.preventDefault();
    ApiUtil.createNotebook(this.state, function(id){
      this.history.pushState(null, "/notebooks/" + id, {});
    }.bind(this));
    this.setState({title:'', description: ''});
    this.props.toggleClicked();
  },

  render: function(){
    return(
        <form onSubmit={this.createNotebook} className ='notebook-form'>
          <input type='text'
                  id='notebook-form-title'
                  valueLink={this.linkState('title')}
                  placeholder='New Notebook Title'/>
          <input type="text"
                  id='notebook-form-description'
                  valueLink={this.linkState('description')}
                  placeholder='Optional blurb...'/>
          <div className='new-notebook-buttons'>
            <p className='create-notebook button' onClick={this.createNotebook}>
            SAVE</p>
            <p className='cancel button' onClick={this.props.toggleClicked}>
              CANCEL
            </p>
          </div>
        </form>
    );
  }
});

module.exports = NotebookForm;
