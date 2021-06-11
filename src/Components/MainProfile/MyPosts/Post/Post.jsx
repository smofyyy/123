import cs from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={cs.post}>
        <textarea>{props.message}</textarea>
        <button className={cs.button}>Click me</button>
      </div>
    </div>
  );
};

export default Post;
