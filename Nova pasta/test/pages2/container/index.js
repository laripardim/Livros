import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../home';
import Perfil from '../perfil';

const Drawer = createDrawerNavigator();

export default function Container() {
    return (    
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Perfil" component={Perfil} />
            </Drawer.Navigator>
    );
  }
  