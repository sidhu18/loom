import { shallowEqual, useSelector } from "react-redux";
import { selectProducts } from "../../../../state/product/product.selector";
import { useEffect, useState } from "react";
import { Product } from "../../../../service/api/product/product.type";
import Text from "../../../../theme/components/Text";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { SuggestionsList } from "../../components/ProductList";

type Props = {
    currentProductId: number,
    categoryId: number,
};

export const SuggestedProducts: React.FC<Props> = ({ currentProductId, categoryId }) => {
    const products = useSelector(selectProducts, shallowEqual);
    const [suggestions, setSuggestions] = useState<Product[]>([]);

    useEffect(() => {
        if (products) {
            const suggestedProducts = products.filter(
                (product) => product.category.id === categoryId && product.id !== currentProductId);
            setSuggestions(suggestedProducts)
        }
    }, [products]);

    return <View style={styles.container}>
        <Text bold>Related Products</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {suggestions.map((item) => (
                <View style={{ padding: 10, width: 150, height: 'auto', gap: 4 }} key={item.id}>
                    <Image src={item.images?.[0]} style={{ width: 'auto', height: 120, resizeMode: 'cover' }} />
                    <Text variant='hint' numberOfLines={1}>{item.title}</Text>
                </View>
            ))}
        </ScrollView>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        gap: 6,
        justifyContent: 'space-around'
    },
})