//Function tha receive an array of streams, and return only stream with a specified RegExp int the title
const selectStreams = async (data, streamsArray) => {

  const regExp = data.regExpLP;

  const array = [];
  streamsArray.map((stream, i) => {
    if (stream.title.match(regExp)) {
      array.push(stream);
    }
  });
  return array;
}

export default selectStreams;