import { motion } from "framer-motion";
import {toLower} from "lodash";
import { Link } from "react-router-dom";
import "./SectorCard.scss";
import { HiOutlineInformationCircle } from "react-icons/hi";

export const SectorCard = ({ pChange, name, fName, totalStocks, params }) => {

  const sectorStockUrl = toLower(params.replace(/\s/g,'-'));

const conditionCheck = Math.sign(pChange) === -1;
  const customStyle = {
    backgroundColor: conditionCheck ? "#FF5E5D" : "#1ecc97",
    display: pChange&&"block",
  };

  return (
    <div className="sector-card">
      <p style={customStyle} className="sector-p-change">
        {pChange}%
      </p>
      <div className="sector-top-part">
        <p className="sector-name">{name}</p>
        <p className="sector-full-name">{fName}</p>
      </div>
      <div className="sector-bottom-part">
        <p className="sector-stock-numbers">
          <span className="stock-number">{totalStocks}</span> Stocks
        </p>
        <Link to={sectorStockUrl} className="get-sector-stocks-btn">
          <HiOutlineInformationCircle  style={{ marginRight: "2px" }} />
          <span>Details</span>
        </Link>
      </div>
    </div>
  );
};
