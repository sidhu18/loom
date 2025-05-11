import { call, put, takeLatest } from "redux-saga/effects";
import { getProducts, setProducts } from "./product.slice";
import { Product } from "../../service/product/product.type";
import productService from "../../service/product/product.service";

function* fetchProducts() {
    const products: Product[] = yield call([productService, productService.get]);
    yield put(setProducts(products));
}

export function* watchProductSaga() {
    yield takeLatest(getProducts, fetchProducts);
}