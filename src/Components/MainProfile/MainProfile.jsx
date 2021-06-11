import cs from "./MainProfile.module.css";
import PostsOrder from "./MyPosts/PostsOrder";

const MainProfile = () => {
  return (
    <div>
      <div className={cs.profile}>
        <img
          src="http://motaen.com/upload/wallpapers/source/2012/08/22/10/04/32150/mota_ru_2082212.jpg"
          width="1200px"
          alt=""
        ></img>
      </div>
      <PostsOrder />
    </div>
  );
};

export default MainProfile;
