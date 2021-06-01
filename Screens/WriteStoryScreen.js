import * as React from 'react';
import { Text, View, TouchableOpacity, Stylesheet, TextInput} from 'react-native';
import AppHeader from '../AppHeader'


export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View style={{marginTop:150, marginLeft:100}}>
                <AppHeader/>
                <TextInput style={{width:200, height:40, borderWidth: 1.5, fontSize: 22}} placeholder="Story Name"/>
                <br/>
                <br/>
                <TextInput style={{width:200, height:40, borderWidth: 1.5, fontSize: 22}} placeholder="Author"/>
                <TextInput style={{width:200, borderWidth:1.5, fontSize: 22}} placeholder="Write your Story" multiline='true'/>
                <TouchableOpacity></TouchableOpacity>
            </View>
        )
    }}