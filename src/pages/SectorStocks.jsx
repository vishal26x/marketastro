import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSectorData } from "../api/inMarket";

const SectorStocks = () => {
  const { sectorId } = useParams();

  const sectorParams = sectorId.replace(/-/g, " ").toUpperCase();

  const [sectorStocksData, setSectorStocksData] = useState([]);

  useEffect(() => {
    getSectorData(sectorParams).then((data) => {
      sessionStorage.setItem("sectorStocksLocal", JSON.stringify(data));
      setSectorStocksData(
        data ? data : JSON.parse(sessionStorage.getItem("sectorStocksLocal"))
      );
    });
  }, [sectorParams]);

  console.log(sectorStocksData);

  return (
    <div>
      {sectorStocksData.map((stock, index) => {
        return <p key={index}>{stock.symbol}</p>;
      })}
    </div>
  );
};

export default SectorStocks;
