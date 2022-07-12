import { Link } from "react-router-dom";
import "./Header.scss";
export const Header = () => {
  return (
    <header>
      <Link className="logo" to="/">
        <img
          className="logo-icon"
          src="/assets/logo.png"
          alt=""
          srcSet=""
        />
        <span className="logo-text">MarketAstro</span>
      </Link>
    </header>
  );
};
