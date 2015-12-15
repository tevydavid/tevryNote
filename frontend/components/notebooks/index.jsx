var React = require('react'),
    NotebookStore = require('../../stores/notebook.js'),
    ApiUtil = require('../../util/apiUtil.js'),
    NotebookIndexItem = require('./indexItem.jsx');

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
      return <li key={idx}>{notebook.title}</li>
    });

    return (
      <ul>
        {notebooks}
      </ul>
    );
  }

});

module.exports = NotebookIndex;
