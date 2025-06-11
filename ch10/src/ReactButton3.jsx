import styled from 'styled-components'

function ReactButton3() {
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

   const StyledDiv = styled.div`
      width: 100px;
      height: 100px;
      border: 1px solid green;
   `

   return (
      //    작성한 styled-components 변수명을 태그명으로 넣어준다
      <div>
         <StyledButton>버튼</StyledButton>
         <LargeButton>Large</LargeButton>
         <StyledDiv></StyledDiv>
      </div>
   )
}

export default ReactButton3
