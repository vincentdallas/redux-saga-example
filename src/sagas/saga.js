import {call, put, takeLatest, takeEvery } from "redux-saga/effects";
import {request_api_data, requestApiData} from "../store/actions";
import {fetchData} from '../api';

function* getApiData(action) {
  try{
    const data =yield call(fetchData);
    yield put(requestApiData(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield takeLatest(request_api_data, getApiData);
}