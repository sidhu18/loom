import { FlatList, ListRenderItem, StyleSheet, View } from "react-native"
import type { Product } from "../../../service/api/product/product.type";
import { shallowEqual, useSelector } from "react-redux";
import { selectFilteredProducts, selectSearchString } from "../../../state/product/product.selector";
import { useEffect, useLayoutEffect, useState } from "react";
import { useAppDispatch } from "../../../state/store";
import { clearSearchString, getProducts, setSearchString, setSelectedProductId } from "../../../state/product/product.slice";
import { ProductListItem } from "./ProductListItem";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../../navigation/routes";
import useDebounce from "../../../utils/hooks/useDebounce";

export const SuggestionsList: React.FC = () => {
    const products = useSelector(selectFilteredProducts, shallowEqual);
    const searchText = useSelector(selectSearchString, shallowEqual);

    const [searchValue, setSearchValue] = useState(searchText);
    const searchString = useDebounce(searchValue);

    const dispatch = useAppDispatch();
    const navigation = useNavigation();

    const searchProducts = (text: string) => {
        setSearchValue(text);
    }

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    useEffect(() => {
        if (!searchString || searchString.length === 0) {
            dispatch(clearSearchString())
            return;
        }
        dispatch(setSearchString(searchString));
    }, [searchString]);

    useLayoutEffect(() => {
      navigation.setOptions({
        headerSearchBarOptions: {
            onChangeText: (event: any) => searchProducts(event.nativeEvent.text),
        }
      })
    }, [navigation])

    const onItemPress = (data: Product) => {
        dispatch(setSelectedProductId(data.id));
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
                contentInsetAdjustmentBehavior='automatic'
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