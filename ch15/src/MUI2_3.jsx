import Box from '@mui/material/Box'
// 커스터마이징한 CSS 적용방법
// 3. sx props 사용(JSON 객체 형태로 사용)

function MUI2_3() {
   // sx props도 인라인 스타일 적용밥법과 유사함
   // => json 객체, 속성명은 카멜표기법 사용
   return (
      <Box
         sx={{
            width: '100px',
            height: '100px',
            backgroundColor: 'warning.light',
            '&:hover': {
               backgroundColor: 'red',
            },
         }}
      >
         Lorem is sit elit.
      </Box>
   )
}

export default MUI2_3
