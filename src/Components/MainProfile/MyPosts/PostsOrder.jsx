import Post from './Post/Post'
import cs from './PostsOrder.module.css'

const PostsOrder = () => {
  return (
    <div className={cs.order}>
      <Post message = 'hello'/>
      <Post message = '5'/>
      <Post />
    </div>
  );
};

export default PostsOrder;
