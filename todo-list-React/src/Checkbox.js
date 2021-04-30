import React from "react";

export const Checkbox = ({ onClick, defaultChecked }) => (
  <input type="checkbox" onClick={onClick} defaultChecked={defaultChecked} />
);
