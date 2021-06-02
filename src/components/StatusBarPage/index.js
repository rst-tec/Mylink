import React from "react";
import { StatusBar } from "react-native";
import { useIsFocused } from '@react-navigation/native';


function StatusBarPage(props){
    const isFocus = useIsFocused();
    return isFocus ? <StatusBar {...props} /> : null;
}

export default StatusBarPage;