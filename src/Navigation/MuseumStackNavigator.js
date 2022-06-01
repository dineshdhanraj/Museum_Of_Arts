import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MuseumHome from "../Components/MuseumHome";
import MuseumDetails from "../Components/MuseumDetails";
const Stack=createNativeStackNavigator();

const Museum_Of_Arts_Stack_Navigator=()=>{

return(
   <NavigationContainer>
     <Stack.Navigator >
        <Stack.Screen name={"Home"} component={MuseumHome} options={{title:'Museum_Of_Art',headerTitleAlign:'center',headerStyle:{backgroundColor:'white'},headerTitleStyle:{fontSize:25,fontWeight:'bold'}}}/>
        <Stack.Screen name={"Details_Screen"} component={MuseumDetails} options={({route})=>({ title:route.params.title,
          headerTitleStyle: {
           fontSize:15
          },
          headerStyle: {
            backgroundColor: '#f4511e',
          }})}/>
        </Stack.Navigator>
</NavigationContainer>
    )
}
export default Museum_Of_Arts_Stack_Navigator;

//"Object: "+route.params.objectID.toString()+","+route.params.title,