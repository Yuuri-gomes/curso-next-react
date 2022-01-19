import P from "prop-types";
import React from "react";
import "./styles.css";

export const TitleComponent = ({ title, id }) => {
  return (
    <h1>
      {title} {id}
    </h1>
  );
};

TitleComponent.propTypes = {
  title: P.string.isRequired,
  id: P.number.isRequired,
};
