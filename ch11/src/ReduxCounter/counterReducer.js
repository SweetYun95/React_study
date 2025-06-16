// initialState는 JSON 객체로 생성
const initialState = { count: 0 }

// state에 디폴트 값으로 initialState 적용 -> state가 없을시 사용
// action: dispatch에서 전달해주는 액션을 받아온다.
function counterReducer(state = initialState, action) {
   // dispatch({type: 'increment', payload: 2}) 실행후
   // action = {type: 'increment', payload: 2} switch 문에 들어가는 값

   // 타입명은 자유롭게 지정
   switch (action.type) {
      case 'increment':
         // 불변성의 규칙을 지켜야 되므로 return 하고 바로 'count + 1' 이런식으로 하면 오류가 남,
         // 새로운 객체(or 배열을)를 생성하여 값을 수정해야 됨
         //  return { count: state.count + 1 }
         return { count: state.count + action.payload }
      case 'decrement':
         //  return { count: state.count - 1 }
         return { count: state.count - action.payload }
      default:
         // 맨처음 사이트에 들어오는 경우 action 값이 없기 때문에 initialState를 리턴해주도록 한다.
         return state
   }
}

export default counterReducer
