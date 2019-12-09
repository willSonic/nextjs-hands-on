
import React from 'react';

import Team from './Team';

const TeamList = () => (
  <div className="TeamList">
    {[1, 2, 3, 4, 5, 6, 7].map(id => <Team key={id} id={id} />)}
  </div>
);

export default TeamList;
