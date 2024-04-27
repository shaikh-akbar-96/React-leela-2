import axios from "../../axiosInstance";
import { useState } from "react";

export default function AddPost(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function onCreatePost(e) {
    e.preventDefault();
    console.log(title);
    console.log(description);
    const postData = {
      title,
      description,
    };
    axios.post(`post.json`, postData).then((response) => {
      props.onPostAdded();
    });
  }
  return (
    <div>
      <h1 className="font-bold text-2xl">Create Post</h1>
      <form onSubmit={onCreatePost}>
        <div className="mb-3">
          <label className="block">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-400 w-1/2 p-1"
            placeholder="Title"
          ></input>
        </div>
        <div className="mb-3">
          <label className="block">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-400 w-1/2 p-1"
            placeholder="Description"
          ></textarea>
        </div>
        <div className="mb-3">
          <button
            type="sumbmit"
            className=" bg-purple-500 text-white px-3 py-1"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
}
