import axios from 'axios';
const url ="https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw,ne) => {
    try {
        const {
            data: { data },
        } = await axios(url, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                'x-rapidapi-key': '0793f1c577mshb8d850d30ff48a2p12d00bjsn9e97682b8a23'
            }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}