import styled from 'styled-components'

function ReactButton5() {
   // styled-components: 스타일이 있는 컴포넌트(변수명 시작은 대문자로)
   // 벡틱안에 css코드와 똑같이 작성하면 됨
   const StyledButton = styled.button`
      color: white;
      background-color: green;
   `

   // styled-components 감싸기(래핑): 기존의 StyledButton의 성질을 가져온다
   const LargeButton = styled(StyledButton)`
      font-size: 50px;
   `

   // 리액트 전통방식으로 만드 컴포넌트
   const ReactButton = (props) => {
      console.log(props)
      // 리액트 전통방식으로 만든 컴포는트를 감싸기로 사용하고 싶으면 아래와 같이 className을 지정해 준다
      return <button className={props.className}>{props.children}</button>
   }

   const ReactLargeButton = styled(ReactButton)`
      font-size: 50px;
      background-color: salmon;
   `

   return (
      //    작성한 styled-components 변수명을 태그명으로 넣어준다
      <div>
         <StyledButton>버튼</StyledButton>
         <LargeButton>Large</LargeButton>
         <ReactButton>React</ReactButton>
         <ReactLargeButton>React Large</ReactLargeButton>
      </div>
   )
}

export default ReactButton5
