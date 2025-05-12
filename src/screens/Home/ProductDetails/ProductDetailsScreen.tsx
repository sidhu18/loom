import { ScrollView, View } from "react-native";
import { shallowEqual, useSelector } from "react-redux";
import { selectSelectedProduct } from "../../../state/product/product.selector";
import { ProductDetails } from "./components/ProductDetails";
import { useEffect } from "react";
import { useAppDispatch } from "../../../state/store";
import { clearSelectedProductId } from "../../../state/product/product.slice";

const ProductDetailsScreen = () => {
    const product = useSelector(selectSelectedProduct, shallowEqual);
    const dispatch = useAppDispatch();

    useEffect(() => {
        return () => {
            dispatch(clearSelectedProductId());
        }
    }, []);

    return (
        product ? <ScrollView style={{ flex: 1 }}>
            <ProductDetails product={product}/>
        </ScrollView> : <></>
    );
};

export default ProductDetailsScreen;
