import loadStreams from "./loadStreams";
import selectStreams from "./selectStreams";

const getWishesStreams = async (apiData) => {
    return await selectStreams(apiData);
}

export default getWishesStreams;