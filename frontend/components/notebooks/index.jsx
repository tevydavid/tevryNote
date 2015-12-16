var React = require('react'),
    NotebookStore = require('../../stores/notebook'),
    ApiUtil = require('../../util/apiUtil'),
    NotebookIndexItem = require('./indexItem'),
    Form = require('./form');

var NotebookIndex = React.createClass({
  getInitialState: function(){
    return ({notebooks: NotebookStore.all()});
  },

  _onChange: function(){
    this.setState({notebooks: NotebookStore.all()})
  },

  componentDidMount: function(){
    this.notebookListener = NotebookStore.addListener(this._onChange);
    ApiUtil.fetchAllNotebooks();
  },

  componentWillUnmount: function(){
    this.notebookListener.remove();
  },

  render: function(){
    var notebooks = this.state.notebooks.map(function (notebook, idx) {
      return <NotebookIndexItem notebook={notebook} key={idx}/>
    });

    return (
      <div className='container group'>
        <div className='notebook-container'>
          <Form/>
          {notebooks}
        </div>
        <div className='notes-container'>
          {this.props.children}
        </div>
      </div>
    );
  }

});

module.exports = NotebookIndex;
