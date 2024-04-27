import axios from "../../axiosInstance";
import { Component } from "react";

export default class SinglePostDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
    };
  }

  componentDidMount() {
    this.getPostDetails();
  }

  componentDidUpdate() {
    if (this.state.post && this.state.post.id === this.props.id) {
      return;
    }
    this.getPostDetails();
  }

  getPostDetails = () => {
    axios.get(`post/${this.props.id}.json`).then((response) => {
      this.setState({
        post: { ...response.data, id: this.props.id },
      });
    });
  };

  render() {
    return (
      <div className="mx-2 border shadow border-gray-300 p-2">
        {this.state.post && (
          <div>
            <div>Id:{this.state.post.id}</div>
            <div>Title:{this.state.post.title}</div>
            <div>Description:{this.state.post.description}</div>
          </div>
        )}
      </div>
    );
  }
}
