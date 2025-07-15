import React from 'react';
import '../styles/Card.css'; // You’ll create this file below

const Card = ({  title, description, tools = [], sourceLink, playLink, type = "project" }) => {
  return (
    <div className="card">
      
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="card-tools">
          {tools.map((tool, i) => (
            <span key={i} className="tool-tag">{tool}</span>
          ))}
        </div>
        <div className="card-buttons">
          {sourceLink && (
            <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="card-button">
              View Source
            </a>
          )}
          {type === "game" && playLink && (
            <a href={playLink} target="_blank" rel="noopener noreferrer" className="card-button play">
              Play Game
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
