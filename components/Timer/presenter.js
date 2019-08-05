import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Button from "../Button"

function formatTime(time){
    let minutes = Math.floor(time/60);
    time =- minutes * 60
    let seconds = parseInt(time % 60, 10);
    return `${minutes < 10 ? `0${minutes}`: minutes} : ${seconds< 10 ? `0${seconds}`: seconds}`
}

// presenter.js는 데이터를 보여주기만 하면 됨. 여기서 리덕스 작업은 하지 않는다,
// connect : 컴포넌트를 스토어에 연결해 줌
class Timer extends Component{

    // 컴포넌트가 새로운 props를 불러올 때마다 호출됨
    componentWillReceiveProps(nextProps){
        const currentProps = this.props;
        if(currentProps.isPlaying === false && nextProps.isPlaying === true){
            // start the interval
            const timeInterval = setInterval(()=>{
                currentProps.addSecond()
            }, 1000);

            this.setState({
                timeInterval
            })
        } else if(currentProps.isPlaying === true && nextProps.isPlaying === false){
            clearInterval(this.state.timeInterval);
        }
    }

    render(){
        console.log(this.props)
        const { 
            isPlaying, 
            elapsedTime, 
            timeDuration, 
            startTimer, 
            restartTimer,
            addSecond
        } = this.props;
        return (
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"}/>
                <View style={styles.upper}>
                    <Text style={styles.time}>{formatTime(timeDuration - elapsedTime)}</Text>
                </View>
                <View style={styles.lower}>
                    { !isPlaying && (<Button iconName="play-circle" onPress={startTimer}></Button>)}
                    { isPlaying && (<Button iconName="stop-circle" onPress={restartTimer}></Button>)}     
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