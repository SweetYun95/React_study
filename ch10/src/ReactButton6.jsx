import styled from 'styled-components'

function ReactButton6() {
   const PrimaryButton = styled.button`
      color: ${(props) => (props.primary ? 'white' : 'blue')};
      background-color: ${(props) => (props.primary ? 'orange' : 'skyblue')};
      font-size: ${(props) => props.size || '10px'};
      
      /*
      &는 현재 컴포넌트를 의미
      가상클래스나 가상요소와 결합해서 사용
      */
      &:hover {
         background-color: ${(props) => (props.primary ? '#f3e739' : '#008cc4')};
      }
   `

   return (
      <>
         <PrimaryButton >Primary Button1</PrimaryButton>
         <PrimaryButton size='20px' primary>Primary Button2</PrimaryButton>
      </>
   )
}

export default ReactButton6
