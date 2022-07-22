import axios from 'axios';

export const getDemoNews = async ()=>{
    try {
        const { data } = await axios.get(
          "https://api.npoint.io/b18029d2764540b690ee"
        );
        return data
    } catch (e) {
        console.log(e);
    }
}