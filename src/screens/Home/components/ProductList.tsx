import { useState } from "react"
import { FlatList, ListRenderItem, Text, View } from "react-native"
import type { Product } from "../../../service/product/product.type";
import productService from "../../../service/product/product.service";

export const SuggestionsList: React.FC = () => {
    const [suggestions, setSuggestions] = useState(productService.getAll());

    const renderListItem: ListRenderItem<Product> = ({ item }) => {
        return (<View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
        </View>)
    }
    return <View>
        <FlatList
            data={suggestions}
            renderItem={renderListItem}
            />
    </View>
}