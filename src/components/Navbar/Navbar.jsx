import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineTable,
  HiOutlineSpeakerphone,
  HiOutlineInformationCircle,
} from "react-icons/hi";
import {MdOutlineInsights} from 'react-icons/md'
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <Link className="nav-logo" to="/">
          <img
            className="nav-logo-icon"
            src="/assets/logo.png"
            alt=""
            srcSet=""
          />
          <span className="nav-logo-text">MarketAstro</span>
        </Link>
        <motion.nav
          className="navbar"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <NavLink activeclassname="active" to="/">
                <MdOutlineInsights className="nav-menu-icon" />{" "}
                <span className="nav-menu-text">Overview</span>
              </NavLink>
            </li>
            <li className="nav-menu-item">
              <NavLink activeclassname="active" to="/sectors">
                <HiOutlineTable className="nav-menu-icon" />
                <span className="nav-menu-text">Sectors</span>
              </NavLink>
            </li>
            <li className="nav-menu-item">
              <NavLink activeclassname="active" to="/news">
                <HiOutlineSpeakerphone className="nav-menu-icon" />
                <span className="nav-menu-text">News</span>
              </NavLink>
            </li>
            <li className="nav-menu-item">
              <NavLink activeclassname="active" to="/about">
                <HiOutlineInformationCircle className="nav-menu-icon" />
                <span className="nav-menu-text">About</span>
              </NavLink>
            </li>
          </ul>
        </motion.nav>
      </div>
    </>
  );
};
