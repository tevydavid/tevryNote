var React = require('react'),
    SearchBar = require('./notes/searchBar');

var Header = React.createClass({


  render: function(){
    return(
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">tNote</a>
          </div>


          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">testing@test.com<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Settings</a></li>

                  <li role="separator" className="divider"></li>
                  <li><a href="#">Log Out</a></li>
                </ul>
              </li>
            </ul>
              <SearchBar/>
          </div>
        </div>
      </nav>
    );

  }


});

module.exports = Header;
