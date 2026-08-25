import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* views */
import { Tables, Orders, Menu } from "../Views";

/* components */
import { CustomHeader } from "../components/common/CustomHeader"
import { Icon } from 'react-native-paper';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="TablesTab"
                component={Tables}
                options={{
                    title: 'Mesas',
                    header: () => <CustomHeader title="Seleccionar Mesa" />,
                    tabBarIcon: ({ color, size }) => (
                        <Icon source="border-all" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="MenuTab"
                component={Menu}
                options={{
                    title: 'Menú',
                    header: () => <CustomHeader title="Menú" />,
                    tabBarIcon: ({ color, size }) => (
                        <Icon source="food" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="OrdersTab"
                component={Orders}
                options={{
                    title: 'Pedidos',
                    header: () => <CustomHeader title="Mis Pedidos" />,
                    tabBarIcon: ({ color, size }) => (
                        <Icon source="invoice-list" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={TabNavigation}
                    options={{ headerShown: false }}
                />
                {/* <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: true,
                        title: 'Contraseña',
                        headerTitle: 'Seleccionar Mesa',
                        header: () => <CustomHeader title="Seleccionar Mesa" />,

                    }}></Stack.Screen> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};