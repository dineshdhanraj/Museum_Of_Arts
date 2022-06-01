import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
   
seperator_objects: {
   flex:1,
   flexDirection: "row",
   marginLeft:10,
   marginRight:10,
   borderWidth:1,
   borderRadius:15},

Margin:{
      marginTop:30},

Details:{
      flexDirection: "row",
      marginLeft:10,
      marginTop:50,},
    
Title:{
      fontSize:20,
      color:'black',
      marginTop:20,
      marginBottom:10,
      marginLeft:10,
      fontWeight:"bold",
      marginRight:10,},
 
image: {
    marginTop: 30,
    marginLeft: 130,
    paddingLeft: 50,
    paddingRight: 50,
    width: 120,
    height: 120,
    marginBottom:10,},

Heading: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
    marginLeft: 10,
    marginRight:10},

seperator: {
    flexDirection: "row",
    marginTop: 20},

Textstyle: {
    flex: 2,
    fontWeight: "bold",
    borderRadius: 15,
    borderWidth: 2,
    marginLeft:10,
    fontSize: 14,
    paddingLeft: 10,
    justifyContent: "center",
    color: "black",
    marginRight: 50,
    paddingRight:10,
    marginLeft:5,
    backgroundColor: "lightblue"},

Error:{
    marginTop:20,
    marginLeft:120,
    color:'red',
    fontWeight:'bold',
    fontSize:35},

DefaultText:{
    marginLeft:22,
    fontWeight:'bold',
    marginBottom:15,
    color:'black',
    fontSize:20},

Indicator:{
    position:'absolute',
    marginLeft:180,
    marginTop:270
    },

Arrow:{
    flex:1,
    marginTop:10,
    marginBottom:6,
    fontSize:30,
    paddingLeft:180,
    color:'black'}
  
})
export default styles;