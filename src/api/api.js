import axios from 'axios'

const clientID = '3qlhvtm78xgpq4nw63dqlgp07zb0zg';
const accesToken1 = "yjaff25jjq46e6812xopn7b9mi7csu";
const accesToken2 = "f8l79xbpjy9l6974900k8bbhn0rnk4";

let api = axios.create({
  headers: {
    'Client-ID': clientID,
    'Authorization' : 'Bearer yjaff25jjq46e6812xopn7b9mi7csu'
  }
})
export default api