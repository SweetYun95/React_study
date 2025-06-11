import styled from 'styled-components'

function ReactButton2() {
   // styled-components: 스타일이 있는 컴포넌트(변수명 시작은 대문자로)
   // 벡틱안에 css코드와 똑같이 작성하면 됨
   const StyledButton = styled.button`
      color: white;
      background-color: green;
   `
   return (
    //    작성한 styled-components 변수명을 태그명으로 넣어준다
      <StyledButton>버튼</StyledButton>
   )
}

export default ReactButton2
