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
          <p className='notebooks-index-header'>NOTEBOOKS</p>
          <NotebookFormOption/>
          <div className='likes-notebook-icon button' onClick={this.showLikes} >
            <span className='glyphicon glyphicon-star' aria-hidden="true" />
          </div>
          <div className='notebooks-index'>
            {notebooks}
          </div>
        </div>
    );
  }

});

module.exports = NotebookIndex;
