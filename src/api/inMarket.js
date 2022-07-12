import axios from "axios";
const URL = "https://latest-stock-price.p.rapidapi.com/any";

export const getNiftyData = async (niftyParams) => {
  try {
    const {data} = await axios.get(URL, {
      params: { Identifier: niftyParams },
      headers: {
        "X-RapidAPI-Key": "ea1a025551mshd933f1c89a2f96ap1f8855jsn675752bf9bc1",
        "X-RapidAPI-Host": "latest-stock-price.p.rapidapi.com",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const INDICES_URL = "https://latest-stock-price.p.rapidapi.com/price";

export const getSectorData = async (sectorParams) => {
  try {
    const { data } = await axios.get(INDICES_URL, {
      params: { Indices: sectorParams },
      headers: {
        "X-RapidAPI-Key": "ea1a025551mshd933f1c89a2f96ap1f8855jsn675752bf9bc1",
        "X-RapidAPI-Host": "latest-stock-price.p.rapidapi.com",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};


