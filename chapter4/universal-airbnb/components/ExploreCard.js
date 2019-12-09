import React from 'react';
import Row from './Row';
import Column from './Column';

export const ExploreCard = props => (
  <div>
    <div className="card">
      <Row alignItems="center">
        <Column>
          <img src={props.imgUrl} alt={props.title} />
        </Column>
        <Column>
          <p>{props.title}</p>
        </Column>
      </Row>
    </div>
    <style jsx>{`
      .card {
        background: #FFFFFF;
        border: 1px solid #E5E5E5;
        box-shadow: 0 2px 8px 0 #EFEFEF;
        border-radius: 3px;
        height: 70px;
        font-weight: 600;
      }
    `}</style>
  </div>
);

export default ExploreCard;
