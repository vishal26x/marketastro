import axios from "axios";

const URL = "https://twitter135.p.rapidapi.com/UserTweets/";

export const getNews = async () => {
  try {
    const { data } = await axios.get(URL, {
      params: { id: "1092883822473924608", count: "20" },
      headers: {
        "X-RapidAPI-Key": "ea1a025551mshd933f1c89a2f96ap1f8855jsn675752bf9bc1",
        "X-RapidAPI-Host": "twitter135.p.rapidapi.com",
      },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};
