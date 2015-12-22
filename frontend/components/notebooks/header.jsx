var React = require('react'),
    NotebookStore = require('../../stores/notebook.js'),
    ApiUtil = require('../../util/apiUtil'),
    UpdateNotebook = require('./updateNotebook'),
    History = require('react-router').History;

var Header = React.createClass({
  mixins: [History],

  getInitialState: function(){
    return({notebook: NotebookStore.find(this.props.notebookId), clicked: false});
  },

  componentWillReceiveProps: function(newProps){
    this.setState({notebook: NotebookStore.find(newProps.notebookId)});
  },
  componentDidMount: function(){
    this.notebookStoreListener = NotebookStore.addListener(this._onChange);
    ApiUtil.fetchSingleNotebook(this.props.notebookId);
  },

  _onChange: function(){
    this.setState({notebook: NotebookStore.find(this.props.notebookId)});
  },

  toggleClicked: function(){
    this.setState({clicked: !this.state.clicked});
  },

  componentWillUnmount: function(){
    this.notebookStoreListener.remove();
  },

  render: function () {
    if (this.state.clicked){
      return (
        <UpdateNotebook notebookId={this.props.notebookId} toggleClicked={this.toggleClicked}/>
      );
    } else {
      return(
        <div className="notebook-header">
          <p className='title'
              onDoubleClick={this.toggleClicked}>{this.state.notebook.title}</p>
          <p className='description'
              onDoubleClick={this.toggleClicked}>{this.state.notebook.description}</p>
        </div>
      );
    }
  }
});

module.exports = Header;
