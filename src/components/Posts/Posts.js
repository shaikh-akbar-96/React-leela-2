import { Component } from "react";
import Post from "../Post/Post";
import axios from "axios";
import SinglePostDetails from "../SinglePostDetails/SinglePostDetails";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      selectedPostId: null,
    };
  }

  componentDidMount() {
    axios
      .get(`https://react-leela-2-default-rtdb.firebaseio.com/post.json`)
      .then((response) => {
        const posts = [];
        for (let key in response.data) {
          posts.push({ ...response.data[key], id: key });
        }
        console.log(posts);
        this.setState({
          posts: posts,
        });
      });
  }

  postClickedHandler = (id) => {
    console.log(id, "id");
    this.setState({
      selectedPostId: id,
    });
  };
  render() {
    return (
      <div>
        <div className="flex">
          <div className="w-3/4">
            <h2 className="font-bold">Posts Data</h2>
            <div className="flex">
              {this.state.posts.map((post) => {
                return (
                  <Post
                    key={post.id}
                    post={post}
                    postClicked={this.postClickedHandler.bind(this, post.id)}
                  />
                );
              })}
            </div>
          </div>
          {this.state.selectedPostId && (
            <div className="w-1/4">
              <h2 className="font-bold">Post details</h2>
              <SinglePostDetails id={this.state.selectedPostId} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
