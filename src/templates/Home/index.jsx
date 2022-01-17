import { useCallback, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { ButtonComponent } from "../../components/Button";
import { PostsComponent } from "../../components/Posts/index";
import { SearchInputComponent } from "../../components/SearchInput";
import { loadPosts } from "../../utils/load-posts";
import "./styles.css";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState([]);
  const [postsPerPage] = useState([10]);
  const [searchValue, setSearchValue] = useState("");

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = !!searchValue
    ? allPosts.filter((post) => {
        return post.title.toUpperCase().includes(searchValue.toUpperCase());
      })
    : posts;

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && <h1>Search: {searchValue}</h1>}
        <SearchInputComponent
          searchValue={searchValue}
          handleChange={handleOnChange}
        />
      </div>
      {filteredPosts.length > 0 && <PostsComponent posts={filteredPosts} />}
      {filteredPosts.length === 0 && (
        <p className="no-more-posts">Não existem Posts =(</p>
      )}
      <div className="button-container">
        {!searchValue && (
          <ButtonComponent
            text="Load more posts"
            whenClick={loadMorePosts}
            disabled={noMorePosts}
          />
        )}
      </div>
    </section>
  );
};

export default Home;
