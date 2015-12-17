var React = require('react'),
    NoteForm = require('./form');

var NoteFormOption = React.createClass({
  getInitialState: function(){
    return({clicked: false});
  },

  toggleClicked: function(){
    this.setState({clicked: !this.state.clicked});
  },

  render: function(){
    if (this.state.clicked) {
      return (
        <div className = 'note-form-box group'>
          <NoteForm toggleClicked={this.toggleClicked}/>
        </div>
      );
    } else {
      return (
        <div className='note-form-box group'>
          <div className='new-note button' onClick={this.toggleClicked}>
            <p className='note-form-icon'><i className='fa fa-sticky-note fa-2x'/><br/>NEW NOTE</p>
          </div>
        </div>
      );
    }
  }

});

module.exports = NoteFormOption;
