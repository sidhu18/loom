import { Image, StyleSheet, View } from "react-native"
import { Product } from "../../../../service/api/product/product.type"
import Text from "../../../../theme/components/Text"
import Carousel from "pinar";
import { InfoChip } from "../../../../theme/components/InfoChip";
import { SuggestedProducts } from "./SuggestedProducts";

type Props = {
    product: Product,
}

export const ProductDetails: React.FC<Props> = ({ product }) => {
    return <View style={{ flex: 1}}>
        <Carousel showsControls={false} showsDots style={sytles.imageContainer}>
            {product.images.map((image, index) => (<Image src={image} style={sytles.image} key={`${product.id}${index}`}/>))}
        </Carousel>
        <View style={sytles.detailsContainer}>
            <Text bold variant='heading1'>{product.title}</Text>
            <InfoChip value={product.category.name} />
            <Text variant='heading2' style={sytles.priceText}>{product.displayPrice}</Text>
            <Text bold variant='heading3'>Description</Text>
            <Text variant='normal'>{product.description}</Text>
        </View>
        <SuggestedProducts />
    </View>
}

const sytles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    priceText: {
        justifyContent: 'flex-end',
        color: 'green'
    },
    detailsContainer: {
        flex: 1,
        padding: 8,
        gap: 6,
        justifyContent: 'space-around'
    },
    categoryContainer: {
        borderWidth: 0.5,
        borderColor: '#aaa',
        paddingVertical: 4,
        borderRadius: 4,
        paddingHorizontal: 8,
        alignSelf: 'flex-start'
    },
    imageContainer: {
        width: '100%',
        height: 400,
    },
    image: {
        width: '100%',
        height: 400,
        resizeMode: 'cover',
    },
});