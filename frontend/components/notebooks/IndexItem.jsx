var React = require('react'),
    History = require('react-router').History;

var NotebookIndexItem = React.createClass({
  mixins: [History],

  showNotes: function () {
    this.history.pushState(null, '/notebooks/' + this.props.notebook.id, {});
  },

  render: function () {
    return(
      <div onClick={this.showNotes}>
        <p>Title: {this.props.notebook.title}</p>
        <p>Description: {this.props.notebook.description}</p>
      </div>
    );
  }
});

module.exports = NotebookIndexItem; 
