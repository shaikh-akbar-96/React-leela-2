export default function Post(props) {
  return (
    <a
      href="#"
      onClick={props.postClicked}
      className="mx-2 p-2 border shadow  border-gray-300 inline-block flex-1 my-2"
    >
      <div>Id:{props.post.id}</div>
      <div>Title:{props.post.title}</div>
      <div>Description:{props.post.description}</div>
    </a>
  );
}
