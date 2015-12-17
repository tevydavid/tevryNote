var React = require('react'),
    NotebookForm = require('./form');

var NotebookFormOption = React.createClass({
  getInitialState: function(){
    return({clicked: false});
  },

  toggleClicked: function(){
    this.setState({clicked: !this.state.clicked});
  },

  render: function(){
    if (this.state.clicked){
      return (
        <div className='notebook-form-box'>
          <NotebookForm toggleClicked={this.toggleClicked}
              notebookId={this.props.notebookId}/>
        </div>
      );
    } else {
      return (
        <div className='notebook-form-box'>
          <div className='new-notebook button' onClick={this.toggleClicked}>
            <p className='notebook-form-icon'><i className="fa fa-book"></i>&nbsp; NEW</p>
          </div>
        </div>
      );
    }
  }
});

module.exports = NotebookFormOption;
