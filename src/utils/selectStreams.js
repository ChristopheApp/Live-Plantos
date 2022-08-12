import loadStreams from "./loadStreams";
const regExpTest = /([lL][oO][sS][21Plnatos][pP][lL][aA][nN][tT][oO][sS])/; 

//Function tha receive an array of streams, and return only stream with a specified RegExp int the title
const selectStreams = async (data) => {

  const regExp = data.regExp21JC;

  const streamsArray = await loadStreams(data)

  const array = [];
  streamsArray.map((stream, i) => {
    if (stream.title.match(regExp)) {
      array.push(stream);
    }
  });
  return array;
}

export default selectStreams;