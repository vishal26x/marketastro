import { PageTransition } from "../components";
// import { getNews } from "../api/newsApi";
import { useEffect, useState } from "react";
import "./styles/News.scss";
import { getDemoNews } from "./demoData.js";
const News = () => {
  const [newsData, setNewsData] = useState([]);

  // useEffect(() => {
  //   getNews().then((data) => {
  //     setNewsData(
  //       data?.data.user.result.timeline.timeline.instructions?.[1].entries
  //     );
  //   });
  // }, []);

  // console.log(newsData);

  useEffect(() => {
    getDemoNews().then((data) => {
      setNewsData(data);
    });
  }, []);

  return (
    <>
      <PageTransition>
        <div className="news-main">
          <div className="news-box">
            {newsData.map((news, i) => {
              return news.content.itemContent ? (
                <div key={i} className="news-content">
                  <div className="tweet-main">
                    <div className="news-headline">
                      <span>
                        {
                          news.content.itemContent?.tweet_results.result.legacy
                            .full_text
                        }
                      </span>
                      {news.content.itemContent.tweet_results.result
                        .quoted_status_result ? (
                        <span>
                          {
                            news.content.itemContent.tweet_results.result
                              .quoted_status_result.result.legacy.full_text
                          }
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="news-additional-detail">
                      <div className="news-time">
                        {news.content.itemContent?.tweet_results.result.legacy.created_at
                          .replace("+0000", "")
                          .replace(new Date().getFullYear(), "")}
                      </div>

                      {news.content.itemContent?.tweet_results.result.legacy
                        .entities.hashtags ? (
                        <div className="news-hashtags">
                          {news.content.itemContent?.tweet_results.result.legacy.entities.hashtags.map(
                            (hashtag, i) => {
                              return (
                                <span key={i} className="hashtag">
                                  #{hashtag.text}
                                </span>
                              );
                            }
                          )}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  {news.content.itemContent?.tweet_results.result.legacy
                    .entities.media ? (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={
                        news.content.itemContent?.tweet_results.result.legacy
                          ?.entities.media[0]?.media_url_https
                      }
                    >
                      <img
                        className="news-media"
                        alt=""
                        src={
                          news.content.itemContent?.tweet_results.result.legacy
                            ?.entities.media[0]?.media_url_https
                        }
                      ></img>
                    </a>
                  ) : (
                    ""
                  )}
                  {news.content.itemContent?.tweet_results.result
                    .quoted_status_result?.result.legacy.entities.media ? (
                      <a href={
                        news.content.itemContent.tweet_results.result
                          .quoted_status_result.result.legacy.entities.media[0]
                          .media_url_https
                      } target="_blank" rel="noopener noreferrer">

                    <img
                      className="news-media"
                      alt=""
                      src={
                        news.content.itemContent.tweet_results.result
                        .quoted_status_result.result.legacy.entities.media[0]
                        .media_url_https
                      }
                      ></img>
                      </a>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                ""
              );
            })}
          </div>
        </div>
      </PageTransition>
    </>
  );
};

export default News;
