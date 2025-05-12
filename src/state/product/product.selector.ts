import { createSelector } from "reselect";
import { RootState } from "../store";

export const selectProducts = (state: RootState) => state.product.products;
export const selectProductMap = (state: RootState) => state.product.productMap;
export const selectSelectedProductId = (state: RootState) => state.product.selectedProductId;
export const selectSuggestedProductMap = (state: RootState) => state.product.suggestedProductsMap;

export const selectSelectedProduct = createSelector(
    selectSelectedProductId,
    selectProductMap,
    (selectedProductId, productMap) => {
        if (!selectedProductId || !productMap[selectedProductId]) return;
        return productMap[selectedProductId];
    }
);

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
