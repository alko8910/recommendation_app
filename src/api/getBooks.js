import axios from "axios";

const KEY = "AIzaSyAcZw9WbwMHSBz_8uvYwkMmdJ4n_ctePMY";

export default axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes?",
    params: {
        filter: "partial",
        maxResults: 10,
        key:KEY
    }
})