import P from "prop-types";
import React from "react";
import { DescriptionComponent } from "../Description";
import { ImageComponent } from "../Image";
import { TitleComponent } from "../Title";
import "./styles.css";

export const PostCardComponent = ({ title, description, cover, id }) => {
  return (
    <div className="post-card">
      <ImageComponent cover={cover} title={title} />
      <div className="post-content">
        <TitleComponent title={title} id={id} />
        <DescriptionComponent description={description} />
      </div>
    </div>
  );
};

PostCardComponent.propTypes = {
  title: P.string.isRequired,
  cover: P.string.isRequired,
  description: P.string.isRequired,
  id: P.number.isRequired,
};
