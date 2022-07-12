import "./IndecesCard.scss";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { motion } from "framer-motion";
export const IndecesCard = ({ name, fName, price, pChange, change, logo }) => {
  const conditionCheck = Math.sign(pChange) === -1;
  const conditionalStyle = {
    color: conditionCheck ? "#FF5E5D" : "#1ecc97",
  };
  const conditionalStyleBg = {
    backgroundColor: conditionCheck ? "#FF5E5D" : "#1ecc97",
    color: "#FFFFFF",
    padding: "2px 5px",
    borderRadius: "16px",
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="index-card"
    >
      <div className="index-details-changes">
        <div className="index-details">
          <div className="index-logo">
            <img className="index-logo-img" src={logo} alt="I" srcSet="" />
          </div>
          <div className="index-name">
            <p className="index-short-name">{name}</p>
            <p className="index-full-name">{fName}</p>
          </div>
        </div>
        <div className="index-changes">
          <p
            style={(conditionalStyle, conditionalStyleBg)}
            className="index-percent-change"
          >
            {conditionCheck ? `${pChange}%` : `+${pChange}%`}
          </p>
          <p style={conditionalStyle} className="index-point-change">
            {conditionCheck ? `-${change}` : `+${change}`}
          </p>
        </div>
      </div>
      <div className="index-price">
        <div className="price-indicator">
          {conditionCheck ? (
            <HiTrendingDown className="arrow-down" />
          ) : (
            <HiTrendingUp className="arrow-up" />
          )}
          <p className="price">{price}</p>
        </div>

        <div className="high-low">
          <div className="day-high">
            <p className="day-high-label">Day High</p>
            <p className="day-high-price">144232</p>
          </div>
          <div className="day-low">
            <p className="day-low-label">Day Low</p>
            <p className="day-low-price">67574</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
