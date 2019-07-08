import axios from "axios";
const api = "http://localhost:4000";

const getAllBulletins = () =>axios.get(`${api}/api/bulletin`).then((result)=>result.data);

const getBulletin = (id) =>axios.get(`${api}/api/bulletin/${id}`).then((result)=>result.data);

const getBulletinImageUrl = (id)=>`${api}/api/bulletin/image/${id}`;

export {getAllBulletins, getBulletin, getBulletinImageUrl};