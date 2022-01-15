import React, { Component } from "react";

// images
import questionmark from "../../../Assets/img/QuestionSite/questionmark.png";

// style
import "../../../Assets/Style/QuestionCards/imageQuestion.scss";

function ImageQuestion(props) {
  return (
    <div className="container">
      <div className="row">
        <h2>Bilderfrage</h2>
        <p>Wähle das passende Bild aus:</p>
        <div className="col-sm">
          <img className="questionImage" src={questionmark} alt={props.title} />
        </div>
        <div className="col-sm">
          <img className="questionImage" src={questionmark} alt={props.title} />
        </div>
        <div className="col-sm">
          <img className="questionImage" src={questionmark} alt={props.title} />
        </div>
        <div className="col-sm">
          <img className="questionImage" src={questionmark} alt={props.title} />
        </div>
      </div>

      <br /><br /><br /><br />
    </div>
  );
}

export default ImageQuestion;
