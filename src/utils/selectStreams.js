import loadStreams from "./loadStreams";
const regExpTest = /([lL][oO][sS][21Plnatos][pP][lL][aA][nN][tT][oO][sS])/; 

//Function tha receive an array of streams, and return only stream with a specified RegExp int the title
const selectStreams = async (data) => {

  const regExp = data.regExpLP;

  const result = await loadStreams(data)

  const streamsArray = result.data;

  const array = [];
  streamsArray.map((stream, i) => {
    if (stream.title.match(regExp)) {
      array.push(stream);
    }
  });
  return {result: result, data: array};
}

export default selectStreams;