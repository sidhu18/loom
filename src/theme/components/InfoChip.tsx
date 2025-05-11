import { StyleSheet, View } from "react-native"
import Text from "./Text"

type Props = {
    value: string,
}

export const InfoChip: React.FC<Props> = ({ value }) => {

    return (<View style={sytles.container}>
        <Text variant='caption'>{value}</Text>
    </View>)
}

const sytles = StyleSheet.create({
    container: {
        borderWidth: 0.5,
        borderColor: '#aaa',
        paddingVertical: 4,
        borderRadius: 4,
        paddingHorizontal: 6,
        alignSelf: 'flex-start'
    },
});
