import React from "react";

export function Input(props) {
  return <input type="search"  onChange={props.sendFetchRequest}/>;
}
