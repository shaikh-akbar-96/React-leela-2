import { Component } from "react";
import Post from "../Post/Post";
import axios from "../../axiosInstance";
// import SinglePostDetails from "../SinglePostDetails/SinglePostDetails";
import FunctionalSinglePostDetails from "../FunctionalSinglePostDetails/FunctionalSinglePostDetails";
import AddPost from "../AddPost/AddPost";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      selectedPostId: null,
      isAddPost: false,
    };
  }

  componentDidMount() {
    this.getPost();
  }

  getPost = () => {
    this.setState({
      isAddPost: false,
    });
    axios.get(`post.json`).then((response) => {
      const posts = [];
      for (let key in response.data) {
        posts.push({ ...response.data[key], id: key });
      }
      console.log(posts);
      this.setState({
        posts: posts,
      });
    });
  };

  postClickedHandler = (id) => {
    console.log(id, "id");
    this.setState({
      selectedPostId: id,
    });
  };

  addPostHandler = () => {
    this.setState({
      isAddPost: true,
    });
  };

  postDeletedHandler = (id, e) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete the post")) {
      axios.delete(`/post/${id}.json`).then((response) => {
        this.getPost();
      });
    }
  };
  render() {
    return (
      <div>
        <div className="flex">
          <div className="w-3/4 mr-4">
            <div className="flex my-4 items-center justify-between">
              <h2 className="font-bold">Posts Data</h2>
              <a
                href="#"
                onClick={this.addPostHandler}
                className="bg-blue-600 px-1 py-1 text-white"
              >
                Create Post
              </a>
            </div>

            <div className="flex flex-wrap">
              {this.state.posts.map((post) => {
                return (
                  <Post
                    key={post.id}
                    post={post}
                    postClicked={this.postClickedHandler.bind(this, post.id)}
                    postDeleted={this.postDeletedHandler.bind(this, post.id)}
                  />
                );
              })}
            </div>
          </div>
          {this.state.selectedPostId && (
            <div className="w-1/4">
              <h2 className="font-bold">Post details</h2>
              <FunctionalSinglePostDetails id={this.state.selectedPostId} />
              {/* <SinglePostDetails id={this.state.selectedPostId} /> */}
            </div>
          )}
        </div>
        {this.state.isAddPost && (
          <div className="my-4">
            <AddPost onPostAdded={this.getPost} />
          </div>
        )}
      </div>
    );
  }
}
