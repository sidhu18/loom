import { put, takeLatest } from "redux-saga/effects";
import { getUserInfo, setUserInfo } from "./user.slice";

function* fetchUserInfo() {
    // Get user info
    const mockUser = {
        id: 'userId123',
        name: 'Test user',
    }
    yield put(setUserInfo(mockUser));
}

export function* watchUserSaga() {
    yield takeLatest(getUserInfo, fetchUserInfo)
};
