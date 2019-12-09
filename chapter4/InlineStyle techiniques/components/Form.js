import React from 'react';
import styled from 'styled-components';

const formBaseStyle = props => `
  height: 38px;
  padding: 6px 10px;
  margin: 10px 10px;
  background-color: #fff;
  border: 1px solid #D1D1D1;
  box-shadow: none;
  border-radius: 4px;
  box-sizing: border-box;
  &:focus {
    border: 1px solid #33C3F0;
    outline: 0;
  }
`;

 export const Input = props => (
   <div>
      <input type="text" {...props} />
      <style jsx>{`
       input {
          ${formBaseStyle(props)};
        }
      `}</style>
    </div>
);

export const TextArea = styled.textarea`
 ${props => formBaseStyle(props)}
 min-height: 65px;
 padding-top: 6px;
 padding-bottom: 6px;
 `;


