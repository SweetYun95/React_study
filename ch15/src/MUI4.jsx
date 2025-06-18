import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

/* 
   Default breakpoints
   xs, extra-small: 0px
   sm, small: 600px
   md, medium: 900px
   lg, large: 1200px
   xl, extra-large: 1536px
*/

const Item = styled(Paper)(({ theme }) => {
   console.log(theme)

   return {
      backgroundColor: '#fff',
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      ...theme.typography.body1,
   }
})

function MUI4() {
   return (
      <Container maxWidth="md">
         {/* container:부모 그리드 역할 표시 */}
         <Grid container>
            {/* 
               <Grid size={8}>1</Grid>
               <Grid size={4}>2</Grid>
               <Grid size={6}>3</Grid>
               <Grid size={6}>4</Grid> 
               */}

            {/* 화면 사이즈가 md(900px)이상일 때는 md비율 적용/ 이하일땐 xs 사이즈 적용*/}
            <Grid size={{ xs: 6, md: 8 }}>
               <Item>xs=6 md=8</Item>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
               <Item>xs=6 md=4</Item>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
               <Item>xs=6 md=4</Item>
            </Grid>
            <Grid size={{ xs: 6, md: 8 }}>
               <Item>xs=6 md=8</Item>
            </Grid>
         </Grid>
      </Container>
   )
}

export default MUI4
