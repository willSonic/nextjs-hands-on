import React from 'react';

export const H4 = props => (
  <div>
    <h4 {...props}></h4>
    <style jsx>{`
      h4 {
        font-size: 1.5rem;
        line-height: 1.2;
        font-weight: 500;
        margin: 3px 0;
      }
    `}</style>
  </div>
);

export default H4;
