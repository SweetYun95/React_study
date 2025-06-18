import { ThemeProvider, createTheme } from '@mui/material/styles'
import  Button  from '@mui/material/Button'

// 테마를 생성
const theme = createTheme({
   palette: {
      primary: {
         main: '#000',
      },
      secondary: {
         main: '#dc004e',
      },
   },
})

function MUI5() {
    return (
          // 생성한 테마를 적용
        <ThemeProvider theme={theme}>
         <Button variant='contained' color="primary">버튼1</Button>
         <Button variant='contained' color="secondary">버튼2</Button>
      </ThemeProvider>
   )
}

export default MUI5
