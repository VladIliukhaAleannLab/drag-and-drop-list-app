import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'antd/dist/antd.css';
import App from "./App";

const root = document.getElementById("root");

if (!Object.entries)
   Object.entries = function( obj ){
      let ownProps = Object.keys( obj ),
         i = ownProps.length,
         resArray = new Array(i); // preallocate the Array

      while (i--)
         resArray[i] = [ownProps[i], obj[ownProps[i]]];
      return resArray;
   };

if(!Object.values) {
  Object.values = function (obj) {
    let vals = [];
    for (const prop in obj) {
        vals.push(obj[prop]);
    }
    return vals;
  }
}

ReactDOM.render(<App/>, root);

