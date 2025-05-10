import { all, fork } from "redux-saga/effects"
import { watchProductSaga } from "./product/product.saga"
import { watchUserSaga } from "./user/user.saga";

const rootSaga = function * () {
    yield all([
        fork(watchProductSaga),
        fork(watchUserSaga)
    ]);
};

export default rootSaga;
