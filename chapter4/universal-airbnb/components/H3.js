import React from 'react';

export const H3 = props => (
  <div>
    <h3 {...props}></h3>
    <style jsx>{`
      h3 {
        font-size: 2.0rem;
        line-height: 1.2;
        font-weight: 400;
        letter-spacing: -.1rem;
        margin-top: 0;
      }
    `}</style>
  </div>
);

export default H3;
