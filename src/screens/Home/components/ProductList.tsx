import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native"
import type { Product } from "../../../service/api/product/product.type";
import { shallowEqual, useSelector } from "react-redux";
import { selectProducts } from "../../../state/product/product.selector";
import { useEffect } from "react";
import { useAppDispatch } from "../../../state/store";
import { getProducts } from "../../../state/product/product.slice";
import { ProductListItem } from "./ProductListItem";

export const SuggestionsList: React.FC = () => {
    const products = useSelector(selectProducts, shallowEqual);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const renderListItem: ListRenderItem<Product> = ({ item }) => {
        return <ProductListItem data={item} />
    };

    return (
        <View style={sytles.container}>
            <FlatList
                data={products}
                renderItem={renderListItem}
                />
        </View>
    );
}

const sytles = StyleSheet.create({
    container: {
        flex: 1,
        width: 'auto',
        borderColor: 'red',
        borderWidth: 1,
    }
});