import { connect } from 'react-redux';
import Timer from './presenter';

// index.js에는 리덕스에 관련된 작업들을 수행

// 스토어에서 state를 복사해서 컨테이너의 props에 붙여넣기
function mapStateToProps(state){
    const { isPlaying, elapsedTime, timeDuration } = state;

    return {
        isPlaying,
        elapsedTime,
        timeDuration
    }
}

export default connect(mapStateToProps)(Timer);