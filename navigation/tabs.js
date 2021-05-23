import React from 'react';
import {View,Image,TouchableOpacity} from 'react-native';

import {createBottomTabNavigator, BottomTabBar} from "@react-navigation/bottom-tabs"

import {Accueil, AccueilCalendrier, Scan} from "../screens"

import {COLORS, icons} from "../ constants"

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <TabNavigator
            tabBarOptions={{
                showLabel:false
                style:{
                    borderTopWidth: 0,
                    backgroundColor : "transparent",
                    elevation: 0
                }
            }}
        >

            <Tab.Screen
                name="Scan"
                component={Scan}
                options={{
                    tabBarIcon:{{focused}} => (
                        <Image
                            source={icons.codebarre}
                            resizeMode = "contain"
                            style= {{
                                width =25,
                                height = 25,
                                tintColor : focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}

// Y'a un bug ici je sais pas pourquoi 

            />

            <Tab.Screen
                name="Calendrier"
                component={AccueilCalendrier}
                options={{
                    tabBarIcon:{{focused}} => (
                        <Image
                            source={icons.calendrier}
                            resizeMode = "contain"
                            style= {{
                                width =25,
                                height = 25,
                                tintColor : focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />
        </TabNavigator>

    )
}

export default Tabs;
