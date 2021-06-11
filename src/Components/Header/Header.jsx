import cs from './Header.module.css'

const Header = () => {
  return (
    <header className={cs.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/512px-Circle-icons-camera.svg.png"
        className={cs.headerImg}
        alt=""
      ></img>
    </header>
  );
};

export default Header;
