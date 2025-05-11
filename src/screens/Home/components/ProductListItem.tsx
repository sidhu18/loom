import React from "react";
import { Button, StyleSheet, Text, View } from "react-native"
import { Product } from "../../../service/product/product.type"

type Props = {
    data: Product,
}

export const ProductListItem: React.FC<Props> = (props: Props) => {
    const { data } = props;
    return <View style={sytles.container}>
                <Text>{data.title}</Text>
                <Text>{data.description}</Text>
                <Text>{data.price}</Text>
                <Button title='Add to cart'></Button>
            </View>
}

const sytles = StyleSheet.create({
    container: {
        flex: 1,
        width: 'auto',
        padding: 16,
        margin: 8,
        borderColor: 'red',
        borderRadius: 8,
        borderWidth: 1,
    },
});
