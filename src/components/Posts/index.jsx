import { PostCardComponent } from "../PostCard";
import "./styles.css";

export const PostsComponent = ({ posts = [] }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCardComponent
          key={post.id}
          title={post.title}
          cover={post.cover}
          description={post.body}
          id={post.id}
        />
      ))}
    </div>
  );
};
