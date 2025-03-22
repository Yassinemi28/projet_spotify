import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="cards">
        <div className="card red">
          <p className="tip">Hover Me</p>
          <p className="second-text">Lorem Ipsum</p>
        </div>
        <div className="card blue">
          <p className="tip">Hover Me</p>
          <p className="second-text">Lorem Ipsum</p>
        </div>
        <div className="card green">
          <p className="tip">Hover Me</p>
          <p className="second-text">Lorem Ipsum</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cards {
    display: flex;
    gap: 15px;
  }

  .cards .red {
    background-color: #f43f5e;
  }

  .cards .blue {
    background-color: #3b82f6;
  }

  .cards .green {
    background-color: #22c55e;
  }

  .cards .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 100px;
    width: 250px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: 400ms;
  }

  .cards .card p.tip {
    font-size: 1em;
    font-weight: 700;
  }

  .cards .card p.second-text {
    font-size: .7em;
  }

  .cards .card:hover {
    transform: scale(1.02, 1.02);
  }

  .cards:hover > .card:not(:hover) {
    filter: blur(5px);
    transform: scale(0.95, 0.95);
  }`;

export default Card;
