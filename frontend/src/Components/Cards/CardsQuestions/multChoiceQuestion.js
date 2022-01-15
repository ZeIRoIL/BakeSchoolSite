import React, { Component } from 'react';

// images
import questionmark from "../../../Assets/img/QuestionSite/questionmark.png";

// style
import "../../../Assets/Style/QuestionCards/imageQuestion.scss";

function MultChoiceQuestion(props) {
    return (
        <div className="container">
        <div className="row">
          <h2>multiple-choice Frage</h2>
          <p className="card">Wie heißt das...</p>
          <div className="col-sm card">
          <button type="button" className="btn ">Antwort 1</button>
          </div>
          <div className="col-sm card">
          <button type="button" className="btn">Antwort 2</button>
          </div>
          <div className="col-sm card">
          <button type="button" className="btn">Antwort 3</button>
          </div>
          <div className="col-sm card">
          <button type="button" className="btn">Antwort 4</button>
          </div>
        </div>
  
        <br /><br /><br /><br />
      </div>
    );
}

export default MultChoiceQuestion;