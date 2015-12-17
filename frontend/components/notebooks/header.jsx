var React = require('react'),
    NotebookStore = require('../../stores/notebook.js'),
    ApiUtil = require('../../util/apiUtil'),
    History = require('react-router').History;

var Header = React.createClass({
  mixins: [History],

  getInitialState: function(){
    return({notebook: NotebookStore.find(this.props.notebookId)});
  },

  componentWillReceiveProps: function(newProps){
    this.setState({notebook: NotebookStore.find(newProps.notebookId)});
  },
  componentDidMount: function(){
    this.notebookStoreListener = NotebookStore.addListener(this.updateNotebook);
    ApiUtil.fetchSingleNotebook(this.props.notebookId);
  },

  updateNotebook: function(){
    this.setState({notebook: NotebookStore.find(this.props.notebookId)});
  },

  componentWillUnmount: function(){
    this.notebookStoreListener.remove();
  },

  render: function () {
    return(
      <div>
        <p>{this.state.notebook.title}</p>
        <p>{this.state.notebook.description}</p>
      </div>
    );
  }
});

module.exports = Header;
