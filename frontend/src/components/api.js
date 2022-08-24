//Axios is a promised-based HTTP client for JavaScript. 
//It has the ability to make HTTP requests from the browser and handle the transformation of request and response data.
import axios from "axios";

const apiUrl = 'http://localhost:8080/api/';

export const singleFileUpload = async (data) => {
    try {
        await axios.post(apiUrl + 'upload', data)
    } catch (error) {
        throw error;
    }
}

export const getallSingleFiles = async(data) => {
    try {
        const {data} = await axios.get(apiUrl+'list');
        return data;
    } catch (error) {
        throw error;
    }
}
