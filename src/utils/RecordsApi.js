import {getJSON} from 'jquery';
const api = process.env.REACT_APP_RECORDS_API_URL || "http://localhost:4000"

export const getAll = () => getJSON(`${api}/records`)