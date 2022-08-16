import getStreamsByGameId from "../api/getStreamsByGameId";
import getStreamsByUserFollows from "../api/getStreamsByUserFollows";

const loadStreams = async (data) => {
    // Si on utilise le mode followed users
    if (data.use_follows && data.user_id) {

        const result = await getStreamsByUserFollows(data);
        return {result: result, data: result.data};

        // Sinon on cherche dans tous les streams GTA V
    } else if(data.game_id) {

        let loading = true;
        let pag = "";
        let array = [];

        // If we have more stream to search with theses parameters
        while (loading) {

            let result = await getStreamsByGameId(data, pag);
            array = array.concat(result.data)
            //setStreams([...streams, ...result.data])
            pag = result.pagination.cursor;
            
            if(!result.data[0]){
                loading = false;
                return {result: result, data: array};
            }
        }
    }
}

export default loadStreams;
