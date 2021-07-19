import React from "react";
import './Input.css'

export default function Input(props) {
  return <input className="input-field" type="search" onChange={props.searchByInput}  onClick={props.searchByInput}/>;
}
