import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native"

import Tabs from './navigation/tabs'
import {Accueil,AccueilCalendrier,Automne, été,FicheProduit,Hiver,Printemps,Scan} from './screens'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        screen.Options={{
          headerShown: false
        }}
        initialRouteName={"Accueil"}
        <Stack.Screen name="Accueil" component={Tabs} />
        <Stack.Screen name="accueilcalendrier" component={AccueilCalendrier} />
        <Stack.Screen name="automne" component={Automne} />
        <Stack.Screen name="été" component={été} />
        <Stack.Screen name="ficheproduit" component={FicheProduit} />
        <Stack.Screen name="hiver" component={Hiver} />
        <Stack.Screen name="printemps" component={Printemps} />
        <Stack.Screen name="scan" component={Scan} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



