import Axios from 'axios';
import Qs from 'qs';

let url = `http://127.0.0.1:4343/smms`


function login(pramas) {
    let login = '/login'
    return Axios.post(`${url}${login}`, Qs.stringify(pramas))
}
export default {
    login,
}