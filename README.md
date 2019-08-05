# react-native & redux example

## Redux is a global state container
- state Management for React
- 리덕스가 필요한 이유는 컴포넌트는 local state를 갖고 있고, 앱은 global state를 갖고 있기 떄문이다.
- global state의 예로는 유저가 로그인 유무에 따라 화면이 달라질 수 있다. global state는 모든 컴포넌트에 영향을 준다.
- 이렇게 공유된 state(global shared state)를 저장하는 것이 리덕스이다.
- 리덕스는 state 컨테이너이다.
- 리덕스를 갖는것은 state의 Db를 갖는 것과 같다
- 따라서 컴포넌트는 서로에게 props를 줄 필요가 없고, 리덕스의 state database에서 가지고 오면 된다.

- 모든 state는 object 형태로 저장된다.
- state가 굉장히 복잡하고 커질 수 있으므로 리덕스는 해당 오브젝트를 수정하는 것에 매우 엄격하다.
- state 오브젝트의 데이터를 수정하는 방법은 'action'을 'reducer'로 보내면 가능하다. (reducer가 대신 state object를 변경해 줌)


