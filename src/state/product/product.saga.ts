import { call, put, takeLatest } from "redux-saga/effects";
import { getProducts, setProducts } from "./product.slice";
import productService from "../../service/product/product.service";
import { Product } from "../../service/product/product.type";

function* fetchProducts() {
    // Mocking dispatch action for testing
    const mockRespose: Product[] = yield call(productService.getAll);
    yield put(setProducts(mockRespose));
}

export function* watchProductSaga() {
    yield takeLatest(getProducts, fetchProducts);
}