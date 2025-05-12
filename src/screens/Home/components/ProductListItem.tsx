import React from "react";
import { Button, Image, StyleSheet, TouchableOpacity, View } from "react-native"
import type { Product } from "../../../service/api/product/product.type";
import Text from "../../../theme/components/Text";
import { InfoChip } from "../../../theme/components/InfoChip";

type Props = {
    data: Product,
    onItemPress: (data: Product) => void,
}

export const ProductListItem: React.FC<Props> = (props: Props) => {
    const { data, onItemPress } = props;
    const onPress = () => {
        onItemPress(data);
    }
    return <TouchableOpacity style={sytles.container} onPress={onPress}>
                <View style={sytles.imageContainer}>
                    <Image src={data.images?.[0]} style={sytles.image}></Image>
                </View>
                <View style={sytles.detailsContainer}>
                    <InfoChip value={data.category.name} />
                    <Text bold>{data.title}</Text>
                    <Text variant='caption' numberOfLines={2}>{data.description}</Text>
                    <Text bold style={{ justifyContent: 'flex-end'}}>{data.displayPrice}</Text>
                </View>
            </TouchableOpacity>
}

const sytles = StyleSheet.create({
    container: {
        flex: 0.5,
        width: '100%',
        borderRadius: 8,
        shadowColor: '#000',
        backgroundColor: '#fff',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
    },
    imageContainer: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        overflow: 'hidden',
    },
    detailsContainer: {
        flex: 1,
        padding: 8,
        gap: 4,
        justifyContent: 'space-around'
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
});
