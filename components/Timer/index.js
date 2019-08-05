import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import Timer from './presenter';
import { actionCreator as tomatoActions } from '../../reducer'

// index.js에는 리덕스에 관련된 작업들을 수행

// 스토어에서 state를 복사해서 컨테이너의 props에 붙여넣기
// 컴포넌트의 현재 state를 불러 옴. 이는 provider store에서 불러 옴
function mapStateToProps(state){
    const { isPlaying, elapsedTime, timeDuration } = state;

    return {
        isPlaying,
        elapsedTime,
        timeDuration
    }
}

// dispatch는 action을 reducer로 보내는 function.
function mapDispatchToProps(dispatch){
    return {
        startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
        restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
    }
}

// connect() : 컴포넌트를 스토어와 연결해줌
export default connect(mapStateToProps, mapDispatchToProps)(Timer);