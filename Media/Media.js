import React from 'react'
import {Text,Image,View} from 'react-native'

const Media = ({imageUri}) => {
    return (
       
        <View style={{backgroundColor:'#75816b', height:120,width:'28%',borderRadius:25,marginLeft:20,marginTop:35}}>
         <Image source={imageUri} style={{height:70,width:70,resizeMode:'contain',alignSelf:'center',marginTop:25,borderRadius:15}} />
      </View>
    
    )
}

export default Media;
