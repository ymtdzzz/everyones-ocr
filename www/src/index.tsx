import React from "react"
import ReactDOM from "react-dom"
import * as wasm from "everyones-ocr"
import App from './App'
import './styles/style.scss'

wasm.greet();

ReactDOM.render(<App />, document.getElementById("root"))
