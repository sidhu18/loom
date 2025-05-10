import { FlatList, ListRenderItem, Text, View } from "react-native"
import type { Product } from "../../../service/product/product.type";
import { shallowEqual, useSelector } from "react-redux";
import { selectProducts } from "../../../state/product/product.selector";
import { useEffect } from "react";
import { useAppDispatch } from "../../../state/store";
import { getProducts } from "../../../state/product/product.slice";

export const SuggestionsList: React.FC = () => {
    const products = useSelector(selectProducts, shallowEqual);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const renderListItem: ListRenderItem<Product> = ({ item }) => {
        return (<View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
        </View>)
    }
    return <View>
        <FlatList
            data={products}
            renderItem={renderListItem}
            />
    </View>
}