var React = require('react');
var coordinatorData = require('./coordinators.json');

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function () {
    var bios = coordinatorData.map((person) => {
      return (
        <div className="coordinator-bio clearfix">
          <div className="col-sm-3">
            <img src={person.photo}/>
          </div>
          <div className="col-sm-9">
            <h2 className="name">{person.name}</h2>
            <p>
              <span className="location">{person.location}</span>
              <span className="pipe" hidden={!person.twitterUsername}> | </span>
              <a hidden={!person.twitterUsername} href={`https://twitter.com/${person.twitterUsername}`} target="_blank">@{person.twitterUsername}</a>
            </p>
            <p className="bio">{person.bio}</p>
            <div className="support">
              <h4>Clubs {person.name.split(` `)[0]} supports:</h4>
              <p>{person.supportedClubs}</p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section>
        <div className="center-block">
          <h1>Featured Regional Coordinators</h1>
          <p>Regional Coordinators mentor multiple Club Captains in one geographic location to realize their full potential through clear, continued leadership and support.</p>
        </div>

        {bios}
      </section>
    );
  }
});
