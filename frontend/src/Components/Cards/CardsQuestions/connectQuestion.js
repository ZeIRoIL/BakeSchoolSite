import React, { Component } from 'react';

// images
import questionmark from "../../../Assets/img/QuestionSite/questionmark.png";

// style
import "../../../Assets/Style/QuestionCards/imageQuestion.scss";


function ConnectQuestion(props) {
    return (
        <div className="container">
        <h2>Verbinde Frage-Antwort</h2>
        <p>Verbinde die Richtigen</p>
        <div class="row justify-content-center">
            <div class="col-md-4">
            <img className="questionImage" src={questionmark} alt={props.title} />
            </div>
            <div class="col-md-4">
            <img className="questionImage" src={questionmark} alt={props.title} />
            </div>
        </div>
        <br/>
        <div class="row justify-content-center">
            <div class="col-md-4">
            <img className="questionImage" src={questionmark} alt={props.title} />
            </div>
            <div class="col-md-4">
            <img className="questionImage" src={questionmark} alt={props.title} />
            </div>
        </div>
        <br/>
        <div class="row justify-content-center">
            <div class="col-md-4">
            <img className="questionImage" src={questionmark} alt={props.title} />
            </div>
            <div class="col-md-4">
            <img className="questionImage" src={questionmark} alt={props.title} />
            </div>
        </div>
          <br /><br /><br /><br />
        </div>
      );
}

export default ConnectQuestion;