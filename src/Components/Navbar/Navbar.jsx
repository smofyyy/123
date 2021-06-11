import cs from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={cs.nav}>
      <div className={cs.item}>
        <a href="/profile">Profile</a>
      </div>
      <div className={cs.item}>
        <a href="/dialogs">Messages</a>
      </div>
      <div className={cs.item}>
        <a href="/news">News</a>
      </div>
      <div className={cs.item}>
        <a href="/music">Music</a>
      </div>
      <div className={cs.item}>
        <a href="/settings">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
