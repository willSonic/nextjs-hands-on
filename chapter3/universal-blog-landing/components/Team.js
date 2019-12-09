
import React from 'react';
import Icon from './Icon';

const oddTeamStyles = id =>
  id % 2 !== 0 ? {
    flexDirection: 'row',
    textAlign: 'left'
  } : {
    flexDirection: 'row-reverse',
    textAlign: 'right'
  };
const Team = ({ id }) => (
  <div className="Team" style={oddTeamStyles(id)}>
    <img src="http://i.pravatar.cc/100" alt="User name" />
    <div className="Team-content">
      <h5>John Doe</h5>
      <p>Author and Program Manager</p>
    </div>
  </div>
);

export default Team;
