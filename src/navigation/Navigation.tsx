import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* views */
import { Home } from "../Views";

/* components */
import { CustomHeader } from "../components/common/CustomHeader"

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: true,
                        title: 'Contraseña',
                        headerTitle: 'Seleccionar Mesa',
                        header: () => <CustomHeader title="Seleccionar Mesa" />,

                    }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};