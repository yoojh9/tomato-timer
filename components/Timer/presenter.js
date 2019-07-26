import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Button from "../Button"

// presenter.js는 데이터를 보여주기만 하면 됨. 여기서 리덕스 작업은 하지 않는다,
// connect : 컴포넌트를 스토어에 연결해 줌
class Timer extends Component{
    render(){
        console.log(this.props);
        return (
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"}/>
                <View style={styles.upper}>
                    <Text style={styles.time}>25:00</Text>
                </View>
                <View style={styles.lower}>
                    <Button iconName="play-circle" onPress={()=>alert('it Works!')}></Button>
                    <Button iconName="stop-circle" onPress={()=>alert('it Works!')}></Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#CE0B24"
    },
    upper:{
        flex:2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lower:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    time: {
        color: "white",
        fontSize: 120,
        fontWeight: "100"
    }
})
export default Timer;