import axios from 'axios'
export default async function MuseumService(url)
{
    try{
        const res = await axios.get(url);
        const ans = res.data;
        return ans;
    }
    catch(Error)
    {
        return {Error_Message:"Not Found"};
    }
}

