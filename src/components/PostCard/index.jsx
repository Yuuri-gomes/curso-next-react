import { DescriptionComponent } from "../Description";
import { ImageComponent } from "../Image";
import { TitleComponent } from "../Title";
import "./styles.css";

export const PostCardComponent = ({ title, description, cover, id }) => {
  return (
    <div className="post-card">
      <ImageComponent cover={cover} title={title} />
      <div className="post-content">
        <TitleComponent title={title} />
        <DescriptionComponent description={description} />
      </div>
    </div>
  );
};
