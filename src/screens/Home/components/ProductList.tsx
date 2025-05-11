import { FlatList, ListRenderItem, StyleSheet, View } from "react-native"
import type { Product } from "../../../service/api/product/product.type";
import { shallowEqual, useSelector } from "react-redux";
import { selectProducts } from "../../../state/product/product.selector";
import { useEffect } from "react";
import { useAppDispatch } from "../../../state/store";
import { getProducts } from "../../../state/product/product.slice";
import { ProductListItem } from "./ProductListItem";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../../navigation/routes";

export const SuggestionsList: React.FC = () => {
    const products = useSelector(selectProducts, shallowEqual);
    const dispatch = useAppDispatch();
    const navigation = useNavigation();

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const onItemPress = (data: Product) => {
        // @ts-ignore: Fix navigation typings
        navigation.navigate(Routes.ProductDetails, { productId: data.id });
    }

    const renderListItem: ListRenderItem<Product> = ({ item }) => (<ProductListItem data={item} onItemPress={onItemPress}/>);

    return (
        <View style={sytles.container}>
            <FlatList
                data={products}
                renderItem={renderListItem}
                keyExtractor={(item) => `${item.id}`}
                numColumns={2}
                columnWrapperStyle={sytles.row}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const sytles = StyleSheet.create({
    container: {
        flex: 1,
        width: 'auto',
        marginBottom: 24,
    },
    row: {
        padding: 4,
        gap: 8,
    },
});