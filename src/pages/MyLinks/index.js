import React from "react"
import { View, Text } from 'react-native'

import StatusBarPage from '../../components/StatusBarPage';

export default function MyLinks(){
    return(
        <View>
          <StatusBarPage
          barStyle="ligh-content"
          backgroundColor="#132742"

          />
          <Text>Pagina Links</Text>          
        </View>
      )
}