import { call, put, select, takeLatest } from "redux-saga/effects";
import { getProducts, getSuggestedProducts, ProductMapType, setProductMap, setProducts, setSuggestedProducts } from "./product.slice";
import { Product } from "../../service/api/product/product.type";
import productService from "../../service/api/product/product.service";
import { selectProducts, selectSelectedProduct, selectSuggestedProducts } from "./product.selector";
import { getUserLocaleInfo } from "../../utils/intl/locale";

function* fetchProducts() {
    const products: Product[] = yield call([productService, productService.get]);
    const productMap: ProductMapType = {};
    const { languageTag, currency } = getUserLocaleInfo();
    const numberFormater = new Intl.NumberFormat(languageTag, {
        style: 'currency',
        currency,
    });
    products.forEach((product) => {
        const formatedPrice = numberFormater.format(product.price);
        product.displayPrice = formatedPrice;
        productMap[product.id] = product;
    });
    yield put(setProducts(products));
    yield put(setProductMap(productMap));
}

function* getSuggestedProductSaga() {
    const suggestedProducts: Product[] = yield select(selectSuggestedProducts);
    if (!!suggestedProducts.length) { return }

    const products: Product[] = yield select(selectProducts);
    const selectedProduct: Product = yield select(selectSelectedProduct);
    const selectedProductId = selectedProduct.id;
    const selectedCategoryId = selectedProduct.category.id;
    const suggestions = products.filter(
                product => 
                    product.category.id === selectedCategoryId &&
                    product.id !== selectedProductId
                );
    yield put(setSuggestedProducts({
        categoryId: selectedCategoryId,
        products: suggestions,
    }));
}

export function* watchProductSaga() {
    yield takeLatest(getProducts, fetchProducts);
    yield takeLatest(getSuggestedProducts, getSuggestedProductSaga);
}