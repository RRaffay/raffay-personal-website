import React from "react";

function CardStack({ text, description, plink }) {
  return (
    <div className="project-card bg-white p-4 h-full">
      <h2 className="font-montserrat font-bold text-2xl mb-4">{text}</h2>
      <p className="text-secondary mb-4">{description}</p>
      {plink && (
        <a
          href={plink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Learn More
        </a>
      )}
    </div>
  );
}

export default CardStack;
