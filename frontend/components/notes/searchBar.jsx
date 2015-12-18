var React = require('react'),
    ApiUtil = require('../../util/apiUtil'),
    History = require('react-router').History,
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var SearchBar = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function(){
    return({clicked: false, for: ''});
  },

  handleInput: function(){
    ApiUtil.fetchSearchNotes(this.state.for, function(id){
      this.history.pushState(null, "/search", {});
    }.bind(this));
    this.setState({for: '', clicked: false});
  },

  toggleClicked: function(){
    this.setState({clicked: !this.state.clicked});
  },

  render: function(){
    if(this.state.clicked){
      return (
        <div>
          <form onSubmit={this.handleInput}>
            <input type='text'
                    valueLink={this.linkState('for')}
                    placeholder='Key Phrase...'/>
          </form>
          <p onClick={this.toggleClicked}>EXIT</p>
        </div>
      );
    } else {
      return (
        <div className='button' onClick={this.toggleClicked}>SEARCH</div>
      );
    }


  }

});

module.exports = SearchBar;
