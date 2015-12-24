var React = require('react'),
    ApiUtil = require('../../util/apiUtil'),
    History = require('react-router').History,
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var SearchBar = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function(){
    return({clicked: false, for: ''});
  },

  handleInput: function(e){
    e.preventDefault();
    ApiUtil.fetchSearchNotes(this.state.for, function(id){
      this.history.pushState(null, "/search", {});
    }.bind(this));
    this.setState({for: '', clicked: false});
  },

  toggleClicked: function(e){
    e.preventDefault();
    this.setState({clicked: !this.state.clicked});
  },

  render: function(){
    if(this.state.clicked){
      return (
        <form className="navbar-form navbar-right" role="search">
          <div className="form-group">
            <input type="text" className="form-control" id="search-bar"
                    valueLink={this.linkState('for')}
                    placeholder="Search Notes"/>
          </div>
          <button type="submit" className="btn btn-default" id="search-bar"
                  onClick={this.handleInput}>Search</button>
        </form>
      );
    } else {
      return (
        <form className="navbar-form navbar-right" role="search">
          <div className="form-group">
          </div>
          <button type="submit" className="btn btn-default" id='search-bar'
                  onClick={this.toggleClicked}>Search</button>
        </form>
      );
    }


  }

});

module.exports = SearchBar;
