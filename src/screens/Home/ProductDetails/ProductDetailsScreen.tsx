import { ScrollView, View } from "react-native";
import { shallowEqual, useSelector } from "react-redux";
import { selectProducts } from "../../../state/product/product.selector";
import { ProductDetails } from "./components/ProductDetails";

type ProductDetailsType = {
    route: {
        params: {
            productId: number,
        }
    }
}

const ProductDetailsScreen = (props: ProductDetailsType) => {
    const currentProductId = props.route.params.productId;
    const products = useSelector(selectProducts, shallowEqual);
    const product = products.find((item) => item.id === currentProductId);

    return (
        product ? <ScrollView style={{ flex: 1 }}>
            <ProductDetails product={product}/>
        </ScrollView> : <></>
    );
};

export default ProductDetailsScreen;
