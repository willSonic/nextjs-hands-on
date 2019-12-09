import React from 'react';

export const Container = props =>(
  <div>
    <section {...props} />
     <style jsx>{`
      section {
        margin-left: auto;
        margin-right: auto;
        width: ${props.width || '80%'};
        }
     `}
     </style>
  </div>
);

export default Container;

