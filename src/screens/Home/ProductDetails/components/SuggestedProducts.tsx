import { shallowEqual, useSelector } from "react-redux";
import { selectSuggestedProducts } from "../../../../state/product/product.selector";
import { useEffect } from "react";
import Text from "../../../../theme/components/Text";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { getSuggestedProducts } from "../../../../state/product/product.slice";
import { useAppDispatch } from "../../../../state/store";

export const SuggestedProducts: React.FC = () => {
    const suggestions = useSelector(selectSuggestedProducts, shallowEqual);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getSuggestedProducts());
    }, []);

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