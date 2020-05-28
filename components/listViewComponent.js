import * as React from "react";
import { Text,StyleSheet,View} from "react-native";
import style from "../styles/allStyles";

const styles = style;

const CustomView = (props) =>{
  return(
    <View>
    <View style = {{flexDirection:"row", justifyContent:"space-around"}}>
        <View style={{...styles.cardContainer, marginHorizontal:10,marginVertical:5}}>
        <Text style={{...styles.cardContainerText,fontSize:16,fontWeight:"bold",color:props.color}}>Country</Text>
        <Text style={{...styles.cardContainerText,fontSize:16,fontWeight:"bold",color:props.color}}>Deaths</Text>
        <Text style={{...styles.cardContainerText,fontSize:16,fontWeight:"bold",color:props.color}}>Cases</Text>
        </View>
        <View style={{...styles.cardContainer, marginHorizontal:10,marginVertical:5,}}>
        <Text style={{...styles.cardContainerText,fontSize:16,fontWeight:"bold",color:props.color}}>:</Text>
        <Text style={{...styles.cardContainerText,fontSize:16,fontWeight:"bold",color:props.color}}>:</Text>
        <Text style={{...styles.cardContainerText,fontSize:16,fontWeight:"bold",color:props.color}}>:</Text>
        </View>
        <View style={{...styles.cardContainer, marginHorizontal:10,marginVertical:5,}}>
        <Text style={{...styles.cardContainerText,fontSize:16,color:props.color}}>{props.name}</Text>
        <Text style={{...styles.cardContainerText,fontSize:16,color:props.color}}>{props.deaths}</Text>
        <Text style={{...styles.cardContainerText,fontSize:16,color:props.color}}>{props.cases}</Text>
        </View>
    </View>
</View>
  );
}

export default CustomView;