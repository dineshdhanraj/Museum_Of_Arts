import React,{useReducer,useEffect} from 'react'
import {ActivityIndicator, FlatList,Text,TouchableWithoutFeedback,View} from 'react-native'
import {useNavigation} from '@react-navigation/native';
import {MainUrl,SubUrl} from '../Config/MuseumUrl';
import styles from './Styles';
import MuseumService from '../Service/MuseumService';
import reducer from './Reducer'

export default function MuseumHome()
{

const navigation = useNavigation();

async function load(url,dispatch)
{
    dispatch({type:"Loader",data:true})
    const list=await MuseumService(url)
   
    if(list.Error_Message)
    {
    dispatch({type:'Error',Error:list.Error_Message})
    }
    else if(list.objectIDs)
    {
    dispatch({type:"Loader",data:false})
    dispatch({type:'Details',data:list})
    }
    else if(list.objectID)
    {
        navigation.navigate('Details_Screen',list)
        dispatch({type:"Loader",data:false})
    }
  
}

const ListDetails=({item})=>
{ 
return(
      <TouchableWithoutFeedback testID="Navigation_OnPress" onPress={async ()=> load(SubUrl(item),dispatch)}>
          <View style={styles.seperator_objects}> 
          <Text style={styles.Title } testID='Title_Id'>Object: {item}</Text>
          <Text  style={styles.Arrow} testID='Arrow'>{'>'}</Text>
        </View>
      </TouchableWithoutFeedback>
      )
}

const[state,dispatch]=useReducer(reducer,{Data:"",Error_Message:"",Loading:true})
useEffect(()=>{load(MainUrl(),dispatch)},[])

return(
    <View style={styles.Margin}>
      <ActivityIndicator style={styles.Indicator}
      testID='Indicator'
      size={50}
      color="paleblue"
      animating={state.Loading}/>
    {state.Error_Message!=""?
    (<Text testID="Error" style={styles.Error}>{state.Error_Message}</Text>):
    (<View>
      <Text style={styles.DefaultText}>Tap On ID Below To See Object Details</Text>
      <FlatList data={state.Data.objectIDs}
        testID="List" 
        renderItem={ListDetails}   
        keyExtractor={item => item}/>
     </View>)
    }
    </View>
    )
}