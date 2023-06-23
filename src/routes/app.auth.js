import { createStackNavigator } from "@react-navigation/stack";
import CatalogoRpg from "../pages/CatalogoRpg";
import Dashboard from "../pages/Dashboard";

const Stack = createStackNavigator();

export default function AppRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Catálogo de Rpg" component={CatalogoRpg} ></Stack.Screen>
            <Stack.Screen name="Dashboard" component={Dashboard} ></Stack.Screen>
        </Stack.Navigator>
    )
}