import { View } from "react-native";
import { SuggestionsList } from "./components/ProductList";

const HomeScreen = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <SuggestionsList/>
      </View>
    );
}

export default HomeScreen;