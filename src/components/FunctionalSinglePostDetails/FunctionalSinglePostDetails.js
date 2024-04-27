import axios from "../../axiosInstance";
import { useEffect, useState } from "react";

export default function FunctionalSinglePostDetails(props) {
  const [post, setPost] = useState(null);
  // fires on component mounted and updated
  useEffect(() => {
    if (post && post.id === props.id) {
      return;
    }
    getPostDetails();
  });
  function getPostDetails() {
    axios.get(`post/${props.id}.json`).then((response) => {
      setPost({ ...response.data, id: props.id });
    });
  }
  if (post) {
    return (
      <div className="mx-2 border shadow border-gray-300 p-2">
        <div>Id:{post.id}</div>
        <div>Title:{post.title}</div>
        <div>Description:{post.description}</div>
      </div>
    );
  }
  return null;
}
