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
                  className='notebook-form-title'
                  valueLink={this.linkState('title')}
                  placeholder='New Notebook Title'/>
                <textarea
                  className='notebook-form-description'
                  valueLink={this.linkState('description')}
                  placeholder='A little bit about this notebook...'/>
                <div className='new-notebook-buttons'>
            <p className='cancel button' onClick={this.props.toggleClicked}>
              <i className="fa fa-times"></i>
            </p>
            <p className='create-notebook button' onClick={this.createNotebook}>
              <i className="fa fa-thumbs-up"></i></p>
          </div>
        </form>
    );
  }
});

module.exports = NotebookForm;
