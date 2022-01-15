import "./styles.css";

export const ImageComponent = ({ cover, title }) => {
  return <img src={cover} alt={title} />;
};
