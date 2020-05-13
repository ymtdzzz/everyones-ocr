import React from "react";
import ReactDOM from "react-dom";
import * as wasm from "everyones-ocr";
import './styles/style.scss'

wasm.greet();

ReactDOM.render(<h1>Everyone's OCR</h1>, document.getElementById("root"));
