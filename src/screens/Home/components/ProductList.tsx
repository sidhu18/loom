import { Button, FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native"
import type { Product } from "../../../service/api/product/product.type";
import { shallowEqual, useSelector } from "react-redux";
import { selectProducts } from "../../../state/product/product.selector";
import { useEffect } from "react";
import { useAppDispatch } from "../../../state/store";
import { getProducts } from "../../../state/product/product.slice";
import { ProductListItem } from "./ProductListItem";
import { authorize } from "../../../service/auth/auth.service";

export const SuggestionsList: React.FC = () => {
    const products = useSelector(selectProducts, shallowEqual);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const onPress = async () => {
        try {
            await authorize();
        } catch (e) {
            console.log(e);
        }
    };

    const renderListItem: ListRenderItem<Product> = ({ item }) => (<ProductListItem data={item} />);

    return (
        <View style={sytles.container}>
            {/* <Button title="Login" onPress={onPress}></Button> */}
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