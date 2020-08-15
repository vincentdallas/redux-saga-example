import {receive_api_data} from "./actions";

export default (state={}, {type, data}) => {
    switch (type) {
        case receive_api_data:
            return data;
        default:
            return state;
    }
}