var React = require('react'),
    SearchBar = require('./notes/searchBar');

var Header = React.createClass({

  onClick: function(e){
    e.preventDefault();
    $.ajax({
      url: '/session',
      type: 'DELETE',
      success: function(data){
        window.location.assign("/");
      }
    })
  },

  render: function(){
    return(
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">

          <div className="navbar-header">
            <a className="navbar-brand" href="#">Notabl.</a>
          </div>



            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{window.notabl.email}<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#" onClick={this.onClick}>Log Out</a></li>
                </ul>
              </li>
            </ul>
              <SearchBar/>
          </div>

      </nav>
    );

  }


});

module.exports = Header;
