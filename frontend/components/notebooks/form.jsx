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
      <div className='notebook-form'>
        <form onSubmit={this.createNotebook} className='group'>
          <input type='text'
                  className='notebook-form-title'
                  valueLink={this.linkState('title')}
                  placeholder='Notebook Title'/>
          <div className='notebook-button group'>
            <p className='cancel button' onClick={this.props.toggleClicked}>
              <i className="fa fa-times"></i>
            </p>
            <div className='create-notebook button' onClick={this.createNotebook}><i className="fa fa-thumbs-up"></i></div>
          </div>
          <div className='notebook-form-description'>
            <input type='text' valueLink={this.linkState('description')}
                      placeholder='A little bit about this notebook...'/>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = NotebookForm;
