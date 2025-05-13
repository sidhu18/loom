import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../service/api/product/product.type";

export type ProductMapType = {
    [id: number]: Product,
};

export type SuggestedProductsPayload = {
    categoryId: number,
    products: Product[],
}

export type SuggestedProductsMap = {
    [categoryId: number]: Product[],
};

export type ProductsStateType = {
    products: Product[],
    productMap: ProductMapType,
    selectedProductId?: number,
    suggestedProductsMap: SuggestedProductsMap,
    searchString?: string,
};

const initialState: ProductsStateType = {
    products: [],
    productMap: {},
    selectedProductId: undefined,
    suggestedProductsMap: {},
    searchString: undefined,
};

const productsSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getProducts: (state) => state,
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        },
        setProductMap: (state, action: PayloadAction<ProductMapType>) => {
            state.productMap = action.payload;
        },
        setSelectedProductId: (state, action: PayloadAction<number>) => {
            state.selectedProductId = action.payload;
        },
        clearSelectedProductId: (state) => {
            state.selectedProductId = undefined;
        },
        getSuggestedProducts: (state) => state,
        setSuggestedProducts: (state, action: PayloadAction<SuggestedProductsPayload>) => {
            const { categoryId, products } = action.payload;
            state.suggestedProductsMap[categoryId] = products;
        },
        setSearchString: (state, action: PayloadAction<string>) => {
            state.searchString = action.payload;
        },
        clearSearchString: (state) => {
            state.searchString = undefined;
        }
    }
})

export const {
    getProducts,
    setProducts,
    setProductMap,
    setSelectedProductId,
    clearSelectedProductId,
    getSuggestedProducts,
    setSuggestedProducts,
    setSearchString,
    clearSearchString,
} = productsSlice.actions;

export const productReducer = productsSlice.reducer;
