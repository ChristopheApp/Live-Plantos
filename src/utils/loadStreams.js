import getStreamsByGameId from "../api/getStreamsByGameId";
import getStreamsByUserFollows from "../api/getStreamsByUserFollows";

const loadStreams = async (data) => {

    console.log("loadStreams : " + JSON.stringify(data))
    if (data.useFollows && data.userId) {

        console.log("load stream by follows")  
        const result = await getStreamsByUserFollows(data.userId);
        return result.data;

    } else if(data.gameId) {
        console.log("load stream by game")  

        let loading = true;
        let pag = data.pagination;
        let array = [];

        // If we have more stream to search with theses parameters
        while (loading) {

            let result = await getStreamsByGameId(data.language, data.limit, data.gameId, pag);
            console.log(result.data)
            array = array.concat(result.data)
            //setStreams([...streams, ...result.data])
            pag = result.pagination.cursor;
            
            if(!result.data[0]){
                loading = false;
                return array;
            }
        }
    }
}

export default loadStreams;
