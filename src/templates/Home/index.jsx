import { Component } from "react";
import "./styles.css";
import { loadPosts } from "../../utils/load-posts";
import { PostsComponent } from "../../components/Posts/index";
import { ButtonComponent } from "../../components/Button";
import { SearchInputComponent } from "../../components/SearchInput";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: "",
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    const { page, postsPerPage } = this.state;

    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  handleOnChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    const filteredPosts = !!searchValue
      ? allPosts.filter((post) => {
          return post.title.toUpperCase().includes(searchValue.toUpperCase());
        })
      : posts;

    return (
      <section className="container">
        <div className="search-container">
          {!!searchValue && <h1>Search: {searchValue}</h1>}
          <SearchInputComponent
            searchValue={searchValue}
            handleChange={this.handleOnChange}
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
              whenClick={this.loadMorePosts}
              disabled={noMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}

export default Home;
