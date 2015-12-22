var React = require('react'),
    History = require('react-router').History;

var NotebookIndexItem = React.createClass({
  mixins: [History],

  showNotes: function () {
    this.history.pushState(null, '/notebooks/' + this.props.notebook.id, {});
  },

  render: function () {
    return(

      <div className="notebook-index-item button" onClick={this.showNotes}>
        <div className='title'><i className="fa fa-book fa-2x"></i>&nbsp; {this.props.notebook.title}</div>
        <div className='description'>{this.props.notebook.description}</div>
      </div>
    );
  }
});

module.exports = NotebookIndexItem;
