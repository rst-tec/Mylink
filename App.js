import React from "react"
import { View, Text } from 'react-native'

export default function App(){
  return(
    <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
      <Text style={{ fontSize: 25, fontWeight:'bold'}}>Meu primeiro app linha 1</Text>
      <Text>Meu primeiro app linha 2</Text>
    </View>
  )

}