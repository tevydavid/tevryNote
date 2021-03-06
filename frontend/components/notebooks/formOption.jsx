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
          <NotebookForm toggleClicked={this.toggleClicked}
              notebookId={this.props.notebookId}/>
      );
    } else {
      return (
          <div className='new-notebook button' onClick={this.toggleClicked}>
            <i className="fa fa-book"></i>&nbsp; NEW
          </div>
      );
    }
  }
});

module.exports = NotebookFormOption;
