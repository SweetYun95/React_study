import Button from '@mui/material/Button'

// 커스터마이징한 CSS 적용방법
// 1. 외부 스타일시트 사용
import './MUI2.css'

function MUI2() {
   return (
      <>
         {/* 1. 외부 스타일시트 사용 - 요소에 className 적용*/}
         <Button className="btn1" variant="text">
            Text
         </Button>
         <Button className="btn2" variant="contained">
            Contained
         </Button>
         <Button className="btn3" variant="outlined">
            Outlined
         </Button>
      </>
   )
}

export default MUI2
