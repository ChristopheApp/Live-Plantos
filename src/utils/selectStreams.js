import getStreamsByGameId from "../api/getStreamsByGameId";
import getStreamsByUserFollows from "../api/getStreamsByUserFollows";

// Store in variable a RegExp to match the title of the stream with "21 Jumpclick" or "21 JUMPCLICK" or "21 jumpclick" or "21 Jump Click" or "21 Jump click" or "21 JUMP ClICK" or "21 JUMP CLICK" or "21 Jump Click" or "21 Jump click" or "21 Jump ClICK"
const regexp21JC = /(21 *[jJ][uU][mM][pP] *[cC][lL][iI][cC][kK]) | (21 *[jJ] *[cC])/;

// Store in variable a RegExp to match the title of the stream with "Los Plantos" or "Los plantos" or "LosPlantos" or "LOSPLANTOS" or "LOS PLANTOS"
const regexpLP = /([lL][oO][sS] *[pP][lL][aA][nN][tT][oO][sS]) | ([lL][pP])/;

const selectStreams = async (streams) => {
  const array = [];
  streams.map((stream, i) => {
    if (stream.title.match(regexp21JC)) {
      array.push(stream);
    }
  }
  );
  return array;
}