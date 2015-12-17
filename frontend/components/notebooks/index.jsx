var React = require('react'),
    NotebookStore = require('../../stores/notebook'),
    ApiUtil = require('../../util/apiUtil'),
    NotebookIndexItem = require('./indexItem'),
    History = require('react-router').History,
    NotebookFormOption = require('./formOption');

var NotebookIndex = React.createClass({
  mixins: [History],

  getInitialState: function(){
    return ({notebooks: NotebookStore.all()});
  },

  _onChange: function(){
    this.setState({notebooks: NotebookStore.all()});
  },

  showLikes: function(){
    this.history.pushState(null, '/likes', {});
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
      return <NotebookIndexItem notebook={notebook} key={idx}/>;
    });

    return (
        <div className='notebooks-container'>
          <h2 className='notebooks-header'>MY NOTEBOOKS</h2>
          <NotebookFormOption/>
          <div className='likes-folder-icon'>
            <i className="fa fa-heart fa-3x button" onClick={this.showLikes}/>
          </div>
          {notebooks}
        </div>
    );
  }

});

module.exports = NotebookIndex;
