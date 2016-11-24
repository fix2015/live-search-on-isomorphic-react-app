/** @jsx React.DOM */

var React = require('react');

/* create factory with griddle component */
var Griddle = React.createFactory(require('griddle-react'));

var fakeData = require('../data/fakeData.js').fakeData;
var columnMeta = require('../data/columnMeta.js').columnMeta;
var resultsPerPage = 200;

var ReactApp = React.createClass({
  getInitialState: function(){
    return { searchData: '' };
  },
  componentDidMount: function () {
    console.log(fakeData);
  },
  handleChange: function(e){
    this.setState({searchData:e.target.value});
  },
  render: function () {
    var searchData = this.state.searchData.trim().toLowerCase(),
        libraries=fakeData;
    if(searchData.length > 0){
      libraries = fakeData.filter(function(l){
        return l.name.toLowerCase().match( searchData ) ||
               l.city.toLowerCase().match( searchData ) ||
               l.state.toLowerCase().match( searchData ) ||
               l.country.toLowerCase().match( searchData ) ||
               l.company.toLowerCase().match( searchData ) ;
      });

    }
    return (
      <div id="table-area">
        Search: <input type="text" value={this.state.searchData} onChange={this.handleChange} placeholder="Type here" />
      <Griddle
        results={libraries}
        columnMetadata={columnMeta}
        resultsPerPage={resultsPerPage}
        tableClassName="table"
        />

      </div>
    )
  }
});

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;
