import { useEffect, useState } from "react";
import { getNiftyData } from "../api/inMarket";
import { SkeletonTheme } from "react-loading-skeleton";
import {
  banknifty,
  dji,
  nasdaq,
  nifty,
  sgx,
  gold,
  crude,
  dxy,
  btc,
  eth,
} from "../data";
import { IndecesCard, Loading, PageTransition } from "../components";
import "./styles/Home.scss";
import { Zoom } from "react-awesome-reveal";
const Home = () => {
  const [inMarketData, setInMarketData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const niftyParams = "NIFTY 50, NIFTY BANK";

  // useEffect(() => {
  //   getNiftyData(niftyParams).then((data) => {
  //     sessionStorage.setItem("dataLocal", JSON.stringify(data));
  //     setInMarketData(
  //       data ? data : JSON.parse(sessionStorage.getItem("dataLocal"))
  //     );
  //     setIsLoading(false);
  //   });
  // }, []);

  return (
    <>
      <PageTransition>
        <h1 className="heading-market">// Overview //</h1>
        <div className="market-indices-cards">
          <div className="nifty">
            <SkeletonTheme baseColor="#3d67807e" highlightColor="#1941587e">
              <IndecesCard
                loadingState={isLoading}
                name={nifty.name}
                fName={nifty.fName}
                logo={nifty.logo}
                price="16520.30"
                pChange="3.6"
                change="442"
              />
              <IndecesCard
                loadingState={isLoading}
                name={banknifty.name}
                fName={banknifty.fName}
                logo={banknifty.logo}
                price="36240.90"
                pChange="4.02"
                change="1204"
              />
            </SkeletonTheme>
          </div>
          <div className="global">
            <IndecesCard
              loadingState={isLoading}
              name={sgx.name}
              fName={sgx.fName}
              logo={sgx.logo}
              price="16400.90"
              pChange="4.02"
              change="204"
            />
            <IndecesCard
              loadingState={isLoading}
              name={dji.name}
              fName={dji.fName}
              logo={dji.logo}
              price="33841.90"
              pChange="-1.02"
              change="404"
            />
            <IndecesCard
              loadingState={isLoading}
              name={nasdaq.name}
              fName={nasdaq.fName}
              logo={nasdaq.logo}
              price="12651.90"
              pChange="2.02"
              change="204"
            />
            <IndecesCard
              loadingState={isLoading}
              name={gold.name}
              fName={gold.fName}
              logo={gold.logo}
              price="101.90"
              pChange="1.02"
              change="3.1"
            />
            <IndecesCard
              loadingState={isLoading}
              name={crude.name}
              fName={crude.fName}
              logo={crude.logo}
              price="36240.90"
              pChange="-4.02"
              change="1204"
            />
            <IndecesCard
              loadingState={isLoading}
              name={dxy.name}
              fName={dxy.fName}
              logo={dxy.logo}
              price="120.90"
              pChange="4.02"
              change="1204"
            />
            <IndecesCard
              loadingState={isLoading}
              name={btc.name}
              fName={btc.fName}
              logo={btc.logo}
              price="120.90"
              pChange="4.02"
              change="1204"
            />
            <IndecesCard
              loadingState={isLoading}
              name={eth.name}
              fName={eth.fName}
              logo={eth.logo}
              price="120.90"
              pChange="-4.02"
              change="1204"
            />
          </div>
        </div>{" "}
      </PageTransition>
    </>
  );
};

export default Home;
