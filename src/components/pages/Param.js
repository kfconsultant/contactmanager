import React from "react";

export default props => {
  return <div>Passing params: {props.match.params.id}</div>;
};
