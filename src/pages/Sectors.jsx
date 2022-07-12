import { Loading, PageTransition, SectorCard } from "../components";
import { Flip, Zoom } from "react-awesome-reveal";
import { sectors } from "../data";
import { filter } from "lodash";
import { getNiftyData } from "../api/inMarket";
import "./styles/Sectors.scss";
import { useEffect, useState } from "react";

const Sectors = () => {
  const niftyParams = sectors.map((i) => i.parameter).toString();
  const [sectorData, setSectorData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getNiftyData(niftyParams).then((data) => {
      data &&
        sectors.forEach((item) => {
          let copyFromItem = data?.find(
            (ele) => ele?.identifier === item.parameter
          );
          item.pChange = copyFromItem.pChange;
        });
      sessionStorage.setItem("localStoredSectors", JSON.stringify(sectors));
      setSectorData(
        data
          ? sectors
          : JSON.parse(sessionStorage.getItem("localStoredSectors"))
      );
      setIsLoading(data ? false : true);
    });
  }, [niftyParams]);
  console.log(sectorData);

  return (
    <>
      <PageTransition>
        <div className="sectors">
          {sectors.map((sector, index) => {
            return (
              <SectorCard
                key={index}
                pChange={isLoading ? "..." : sector.pChange}
                name={sector.name}
                fName={sector.fName}
                totalStocks={sector.totalStocks}
                params={sector.parameter}
              />
            );
          })}
        </div>
      </PageTransition>
    </>
  );
};

export default Sectors;
