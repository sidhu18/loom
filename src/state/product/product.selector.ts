import { createSelector } from "reselect";
import { RootState } from "../store";

export const selectProducts = (state: RootState) => state.product.products;
export const selectProductMap = (state: RootState) => state.product.productMap;
export const selectSelectedProductId = (state: RootState) => state.product.selectedProductId;
export const selectSuggestedProductMap = (state: RootState) => state.product.suggestedProductsMap;
export const selectSearchString = (state: RootState) => state.product.searchString;

export const selectSelectedProduct = createSelector(
    selectSelectedProductId,
    selectProductMap,
    (selectedProductId, productMap) => {
        if (!selectedProductId || !productMap[selectedProductId]) return;
        return productMap[selectedProductId];
    }
);

export const selectFilteredProducts = createSelector(
    selectProducts,
    selectSearchString,
    (products, searchString) => {
        if (searchString && searchString.length > 0) {
            const regex = new RegExp(searchString, 'i'); 
            const matches = products.filter((product) => product.title.match(regex));
            return matches;
        }
        return products;
    }
)

export const selectSuggestedProducts = createSelector(
    selectSelectedProduct,
    selectSuggestedProductMap,
    (selectedProduct, suggestedProductMap) => {
        const selectedCategoryId = selectedProduct?.category.id;
        if (selectedCategoryId) {
            return suggestedProductMap[selectedCategoryId] ?? [];
        }
        return [];
    }
);
