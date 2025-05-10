import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../service/product/product.type";

export type ProductsStateType = {
    products: Product[],
};

const initialState: ProductsStateType = {
    products: [],
};

const productsSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getProducts: (state) => state,
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload
        },
    }
})

export const {
    getProducts,
    setProducts,
} = productsSlice.actions;

export const productReducer = productsSlice.reducer;
