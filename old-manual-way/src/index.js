// const express = require("express") // CommonJS
// import express from 'express'

// ES Modules || ES Module Syntax
import ReactDOM from "react-dom";
import React from "react";

// document.getElementById("root").innerHTML = "<div>Does this work?</div>";

function ExampleOfComponent() {
  return (
    <div>
      <p>Does this work?</p>
      <p>UI guess so</p>
      <h3>No bootstrap</h3>
    </div>
  );
}

ReactDOM.render(<ExampleOfComponent />, document.getElementById("root"));
