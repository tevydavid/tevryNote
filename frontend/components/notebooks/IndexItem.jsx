var React = require('react'),
    History = require('react-router').History;

var NotebookIndexItem = React.createClass({
  mixins: [History],

  showNotes: function () {
    this.history.pushState(null, '/notebooks/' + this.props.notebook.id, {});
  },

  render: function () {
    return(
      <div onClick={this.showNotes} className='notebook-menu-item button'>
        <p className='notebook-title'><i className="fa fa-book"></i>&nbsp; {this.props.notebook.title}</p>
        <p className='notebook-description'>{this.props.notebook.description}</p>
      </div>
    );
  }
});

module.exports = NotebookIndexItem;
