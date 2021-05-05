import { View } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";

export default function WelcomeScreen() {
    return (
        <View>
            <Text>Hello</Text>
            <Text>Welcome to Exercise Tracker</Text>
            <Button title="Get Started"></Button>
        </View>
    );
}