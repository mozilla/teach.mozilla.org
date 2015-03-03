var React = require('react');

var HeroUnit = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-md-12 hero-unit" style={{
          backgroundImage: 'url(' + this.props.image + ')'
        }}>
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = HeroUnit;
