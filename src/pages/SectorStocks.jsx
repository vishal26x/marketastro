import { filter, startCase, toUpper } from "lodash";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSectorData } from "../api/inMarket";
import { sectors } from "../data";
import { PageTransition, StockTable } from "../components";
import "./styles/SectorStocks.scss";
const SectorStocks = () => {
  const { sectorId } = useParams();
  const sectorParams = toUpper(startCase(sectorId));
  const [sectorStocksData, setSectorStocksData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSectorData(sectorParams).then((data) => {
      sessionStorage.setItem("sectorStocksLocal", JSON.stringify(data));
      setSectorStocksData(
        data ? data : JSON.parse(sessionStorage.getItem("sectorStocksLocal"))
      );
      setIsLoading(sectorStocksData ? false : true);
    });
  }, [sectorParams]);

  return (
    <PageTransition>
      <h1 className="sector-stock-heading">// {sectorParams} //</h1>
      <div className="sector-stocks">
        <StockTable data={sectorStocksData} loadingState={isLoading} />
      </div>
    </PageTransition>
  );
};

export default SectorStocks;
