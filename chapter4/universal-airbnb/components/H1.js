import React from 'react';

export const H1 = props => (
  <div>
    <h1 {...props}></h1>
    <style jsx>{`
      h1 {
        font-size: 3.0rem;
        line-height: 1.2;
        font-weight: 400;
        letter-spacing: -.1rem;
        margin-top: 0;
        color: ${props.isBrand && '#FF5661'};
        ${props.isTitle && `
          margin-bottom: 2px;
          width: 60%;
        `};
      }
    `}</style>
  </div>
);

export default H1;
