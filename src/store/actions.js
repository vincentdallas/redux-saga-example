export const request_api_data = "request_api_data";
export const receive_api_data = "receive_api_data";

export const requestApiData = () => ({type: request_api_data});
export const receiveApiData = data => ({type: receive_api_data, data});

