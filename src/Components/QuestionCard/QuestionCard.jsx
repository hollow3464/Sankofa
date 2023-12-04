import "./questionCard.css";
import React from "react";

export default function QuestionCard({ question, color1, color2, color3 }) {
  return (
    <div className="question-card-container">
      <div
        key={"question-card-cotainer-color1"}
        className="question-card-1"
        style={{ backgroundColor: `${color1}` }}
      ></div>
      <div
        key={"question-card-cotainer-color2"}
        className="question-card-2"
        style={{ backgroundColor: `${color2}` }}
      ></div>
      <div
        key={"question-card-cotainer-color3"}
        className="question-card-3"
        style={{ backgroundColor: `${color3}` }}
      >
        <h1 className="question-card-title">{question}</h1>
      </div>
    </div>
  );
}
