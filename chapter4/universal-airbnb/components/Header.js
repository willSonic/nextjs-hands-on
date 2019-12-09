
import React from 'react';

import H1 from './H1';
import Search from './Search';

export const Header = props => (
  <div>
    <H1 isBrand isTitle>Airbnb</H1>
    <H1 isTitle>
    Book unique homes and experience a city like a local.
    </H1>
    {props.showSearch && <Search></Search>}
  </div>
);

export default Header;
