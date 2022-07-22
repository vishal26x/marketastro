import "./IndecesCard.scss";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { motion } from "framer-motion";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export const IndecesCard = ({
  name,
  fName,
  price,
  pChange,
  change,
  logo,
  loadingState,
}) => {
  const conditionCheck = Math.sign(pChange) === -1;
  const conditionalStyle = {
    color: conditionCheck ? "#FF5E5D" : "#1ecc97",
  };
  const conditionalStyleBg = {
    backgroundColor: loadingState
      ? "tranparent"
      : conditionCheck
      ? "#FF5E5D"
      : "#1ecc97",
    color: "#FFFFFF",
    padding: loadingState ? "0" : "2px 5px",
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
              <img
                className="index-logo-img"
                src={logo}
                alt={<Skeleton circle={true} />}
                srcSet=""
              />
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
              {loadingState ? (
                <Skeleton width={40} />
              ) : conditionCheck ? (
                `${pChange}%`
              ) : (
                `+${pChange}%`
              )}
            </p>
            <p style={conditionalStyle} className="index-point-change">
              {loadingState ? (
                <Skeleton width={20} />
              ) : conditionCheck ? (
                `-${change}`
              ) : (
                `+${change}`
              )}
            </p>
          </div>
        </div>
        <div className="index-price">
          {loadingState ? (
            <Skeleton width={100} />
          ) : (
            <div className="price-indicator">
              {conditionCheck ? (
                <HiTrendingDown className="arrow-down" />
              ) : (
                <HiTrendingUp className="arrow-up" />
              )}
              <p className="price">{price}</p>
            </div>
          )}

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
